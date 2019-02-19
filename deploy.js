const ghPages = require('gh-pages');
const fs = require('fs');

// Add a 200.html file to help with client-side routing.
fs.copyFileSync('public/index.html', 'build/200.html');
// Copy the CNAME file for correct custom domain.
fs.copyFileSync('CNAME', 'build/CNAME');

ghPages.publish('build', () => {
  console.log('🚀 published!');
});
