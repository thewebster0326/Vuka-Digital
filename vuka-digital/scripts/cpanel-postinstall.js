if (process.env.NODE_ENV !== 'production') {
  process.exit(0)
}

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = '/home/vukadigital/repositories/Vuka-Digital/vuka-digital'

execSync('npx next build', { cwd: ROOT, stdio: 'inherit' })

fs.cpSync(path.join(ROOT, 'public'), path.join(ROOT, '.next/standalone/public'), { recursive: true })
fs.cpSync(path.join(ROOT, '.next/static'), path.join(ROOT, '.next/standalone/.next/static'), {
  recursive: true,
})
fs.mkdirSync(path.join(ROOT, 'tmp'), { recursive: true })
fs.writeFileSync(path.join(ROOT, 'tmp/restart.txt'), '')

console.log('cPanel postinstall: build complete, static assets copied, restart triggered.')
