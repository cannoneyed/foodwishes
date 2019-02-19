const ghPages = require('gh-pages');
const fs = require('fs');

// Copy the CNAME file for correct custom domain.
fs.copyFileSync('CNAME', 'build/CNAME');

ghPages.publish('build', () => {
  console.log('🚀 published!');
});
