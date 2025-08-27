import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  // 库模式构建配置
  if (mode === 'lib') {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.js'),
          name: 'VuejsDatepickerMobile',
          fileName: (format) => `vuejs-datepicker-mobile.${format}.js`,
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          external: ['vue'],
          output: {
            // 在UMD构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
    }
  }

  // 正常开发构建配置
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 8080,
      open: true
    }
  }
})
