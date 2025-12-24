import fs from 'fs';
import path from 'path';

export interface GalleryImage {
  path: string; // Public path (e.g., /fest-images/technex25_images/technex1.jpg)
  fullPath: string; // Full filesystem path
  mtime: Date; // Modification time
}

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];

/**
 * Recursively scan directory for image files
 */
function scanDirectory(
  dirPath: string,
  publicDir: string,
  whitelist: string[] | null,
  blacklist: string[],
  results: GalleryImage[]
): void {
  // Check if directory should be excluded
  const relativePath = path.relative(publicDir, dirPath);
  const normalizedRelativePath = relativePath.replace(/\\/g, '/');
  
  // Check blacklist first
  if (blacklist.some(blacklisted => {
    const normalizedBlacklisted = blacklisted.replace(/\\/g, '/');
    return normalizedRelativePath === normalizedBlacklisted ||
           normalizedRelativePath.startsWith(normalizedBlacklisted + '/') ||
           normalizedRelativePath.includes('/' + normalizedBlacklisted + '/');
  })) {
    return;
  }
  
  // Check whitelist if provided
  if (whitelist && whitelist.length > 0) {
    // At root level (empty relativePath), we should scan to find whitelisted subdirectories
    if (normalizedRelativePath === '' || normalizedRelativePath === '.') {
      // Continue scanning at root level - don't filter here
    } else {
      // Check if this directory should be scanned
      const shouldScan = whitelist.some(whitelisted => {
        const normalizedWhitelisted = whitelisted.replace(/\\/g, '/');
        
        // Case 1: Directory exactly matches whitelist entry
        if (normalizedRelativePath === normalizedWhitelisted) {
          return true;
        }
        
        // Case 2: Directory is inside a whitelisted path (e.g., "fest-images/technex25_images" is inside "fest-images")
        if (normalizedRelativePath.startsWith(normalizedWhitelisted + '/')) {
          return true;
        }
        
        // Case 3: A whitelisted path is inside this directory (e.g., we're at "fest-images" and whitelist has "fest-images/technex25_images")
        // This allows us to scan parent directories that contain whitelisted paths
        if (normalizedWhitelisted.startsWith(normalizedRelativePath + '/')) {
          return true;
        }
        
        return false;
      });
      
      if (!shouldScan) {
        return; // Skip this directory
      }
    }
  }

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        scanDirectory(fullPath, publicDir, whitelist, blacklist, results);
      } else if (entry.isFile()) {
        // Check if file is an image
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const fileRelativePath = path.relative(publicDir, fullPath);
          const normalizedFileRelativePath = fileRelativePath.replace(/\\/g, '/');
          
          // Check whitelist for files if provided
          if (whitelist && whitelist.length > 0) {
            const isFileWhitelisted = whitelist.some(whitelisted => {
              const normalizedWhitelisted = whitelisted.replace(/\\/g, '/');
              return normalizedFileRelativePath === normalizedWhitelisted ||
                     normalizedFileRelativePath.startsWith(normalizedWhitelisted + '/');
            });
            
            if (!isFileWhitelisted) {
              continue; // Skip this file
            }
          }
          
          // Check blacklist for files
          if (blacklist.some(blacklisted => {
            const normalizedBlacklisted = blacklisted.replace(/\\/g, '/');
            return normalizedFileRelativePath === normalizedBlacklisted ||
                   normalizedFileRelativePath.startsWith(normalizedBlacklisted + '/') ||
                   normalizedFileRelativePath.includes('/' + normalizedBlacklisted + '/');
          })) {
            continue; // Skip this file
          }
          
          const stats = fs.statSync(fullPath);
          const publicPath = '/' + normalizedFileRelativePath;
          
          results.push({
            path: publicPath,
            fullPath: fullPath,
            mtime: stats.mtime,
          });
        }
      }
    }
  } catch (error) {
    // Skip directories that can't be read
    console.warn(`Cannot read directory: ${dirPath}`, error);
  }
}

/**
 * Get all images from the public folder
 * @param whitelist - Array of directory paths to include (relative to public). If null/empty, all directories are included.
 * @param blacklist - Array of directory paths to exclude (relative to public)
 * @returns Array of images sorted by modification time (most recent first)
 */
export function getGalleryImages(
  whitelist: string[] | null = null,
  blacklist: string[] = []
): GalleryImage[] {
  const publicDir = path.join(process.cwd(), 'public');
  
  if (!fs.existsSync(publicDir)) {
    return [];
  }

  const results: GalleryImage[] = [];
  
  // Normalize whitelist and blacklist paths (remove leading/trailing slashes)
  const normalizedWhitelist = whitelist?.map(p => p.replace(/^\/+|\/+$/g, '')) || null;
  const normalizedBlacklist = blacklist.map(p => p.replace(/^\/+|\/+$/g, ''));
  
  scanDirectory(publicDir, publicDir, normalizedWhitelist, normalizedBlacklist, results);
  
  // Sort by modification time (most recent first)
  results.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
  
  return results;
}

