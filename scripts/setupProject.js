const { execSync } = require('child_process');


const isWindows = process.platform === 'win32';
const isMac = !isWindows;

if (isMac) {
  console.log('\n\nInstall pod modules (mac platform only)');
  console.log(execSync('cd ios && pod install && cd ..', { encoding: 'utf8' }));
}

console.log('\n\n\x1b[1m\x1b[42m', 'FINAL - Postinstall completed  \x1b[0m');
