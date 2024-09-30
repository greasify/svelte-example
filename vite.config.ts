import { defineConfig } from 'vite'
import userscript from 'vite-userscript-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { name, version, homepage } from './package.json'

export default defineConfig((config) => {
  const port = 3000
  const isDev = config.mode === 'development'

  const styleResource = isDev
    ? `http://localhost:${port}/style.css`
    : `${homepage}style.css?ts=${Date.now()}` // via gh pages

  const connect = [new URL(homepage).hostname]
  if (isDev) connect.push('localhost')

  return {
    plugins: [
      svelte(),
      userscript({
        entry: 'src/index.ts',
        header: {
          name,
          version,
          homepage,
          connect,
          match: 'https://example.com',
          resource: [['style', styleResource]],
        },
        server: {
          port
        }
      })
    ],
  }
})
