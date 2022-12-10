import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { vitestConfig } from './viteConfig'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import presetIcons from '@unocss/preset-icons'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // 分包策略
          // 如果包含 node_modules 的依赖，就单独打包
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  test: {
    ...vitestConfig,
  },
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          /* options */
        }),
      ],
      shortcuts: {
        'header-title':
          'color-white font-bold text-5 pl-10 ',
      },
      theme: {
        breakpoints: {
          sm: '375px',
          md: '768px',
        },
      },
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'vue-router'],
      dts: true,
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true,
      },
    }),
    Components({
      dts: 'src/auto-import.d.ts',
      extensions: ['vue'],
    }),
    Icons({ autoInstall: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      '/api': {
        // target: 'http://10.16.20.4:8080', //实际请求地址
        target: 'http://localhost:8080', //实际请求地址
        // target: 'http://10.12.146.67:8080', //实际请求地址
        // target: 'http://10.15.12.84:8080', //实际请求地址

        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
