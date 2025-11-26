import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
    if (mode === 'lib') {
        // Library build configuration
        return {
            plugins: [vue()],
            build: {
                lib: {
                    entry: resolve(__dirname, 'lib/index.js'),
                    name: 'VueFlipClock',
                    fileName: 'vue-flip-clock'
                },
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        globals: {
                            vue: 'Vue'
                        }
                    }
                }
            }
        }
    } else {
        // Demo build configuration
        return {
            plugins: [vue()],
            root: 'demo',
            base: process.env.NODE_ENV === 'production' ? '/vue-flip-clock/' : '/',
            build: {
                outDir: '../dist-demo',
                emptyOutDir: true
            }
        }
    }
})
