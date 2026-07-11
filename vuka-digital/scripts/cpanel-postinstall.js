if (process.env.NODE_ENV !== 'production') {
  process.exit(0)
}

const { execSync } = require('child_process')
const fs = require('fs')

execSync('npx next build', { stdio: 'inherit' })

fs.cpSync('public', '.next/standalone/public', { recursive: true })
fs.cpSync('.next/static', '.next/standalone/.next/static', { recursive: true })
fs.mkdirSync('tmp', { recursive: true })
fs.writeFileSync('tmp/restart.txt', '')

console.log('cPanel postinstall: build complete, static assets copied, restart triggered.')
