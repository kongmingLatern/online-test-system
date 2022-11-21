import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { vitestConfig } from './viteConfig'

export default defineConfig({
  test: {
    ...vitestConfig
  },
  plugins: [vue(), vueJsx(), Unocss({
    presets: [presetUno(), presetAttributify()],
    shortcuts: {
      'header-title': 'color-white font-bold text-5 pl-10 lh-15'
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
