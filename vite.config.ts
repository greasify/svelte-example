import { defineConfig } from 'vite'
import userscript from 'vite-userscript-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { name, version, homepage } from './package.json'

export default defineConfig((config) => {
  const port = 3000
  const styleUrl = config.mode === 'development'
    ? `http://localhost:${port}/style.css`
    : `${homepage}style.css?ts=${Date.now()}` // via gh pages

  return {
    plugins: [
      svelte(),
      userscript({
        entry: 'src/index.ts',
        header: {
          name,
          version,
          homepage,
          match: 'https://example.com',
          resource: [['style', styleUrl]],
        },
        server: {
          port
        }
      })
    ],
  }
})
