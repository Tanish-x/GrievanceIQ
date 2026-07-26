const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      if (file !== 'node_modules' && file !== 'build' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (
        dirFile.endsWith('.jsx') || 
        dirFile.endsWith('.js') || 
        dirFile.endsWith('.css') || 
        dirFile.endsWith('.json') || 
        dirFile.endsWith('.html') ||
        dirFile.endsWith('.md')
      ) {
        if (file !== 'package-lock.json') {
          filelist.push(dirFile);
        }
      }
    }
  }
  return filelist;
};

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/GrievancelQ/g, 'GrievancelQ')
    .replace(/grievancelq/g, 'grievancelq')
    .replace(/GRIEVANCELQ/g, 'GRIEVANCELQ');
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
};

const files = walkSync(__dirname);
files.forEach(replaceInFile);
console.log('Replacement complete.');
