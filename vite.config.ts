import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {TDesignResolver} from 'unplugin-vue-components/resolvers';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [TDesignResolver({
                // importStyle: 'less',
                library: 'vue-next'
            }),
                AntDesignVueResolver(),],

        }),
        Inspect(),
        visualizer({ brotliSize: true, filename: 'report.html' }),
        AutoImport({
            // include: [
            //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            //     /\.vue$/, /\.vue\?vue/, // .vue
            //     /\.md$/, // .md
            // ],
            dts: true,
            imports: [
                'vue',
                'vue-router',
            ],
            eslintrc: {
                enabled: true,
            },
        }),
    ],
    server: {
        host: '0.0.0.0',
        fs: {
            strict: false
        }
    }
})
