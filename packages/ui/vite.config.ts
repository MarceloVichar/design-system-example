import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        ...process.env.NODE_ENV !== 'docs' && {
            lib: {
                entry: resolve(__dirname, 'src/index.ts'),
                formats: ['es', 'cjs'],
                fileName: (format) => `zro-kit-ui.${format}.js`
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    preserveModules: true,
                    exports: 'named',
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        }
    }
})
