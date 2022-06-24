import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: './dist/cjs/index.js',
            format: 'cjs',
        },
        {
            file: './dist/esm/index.js',
            format: 'es',
        },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        commonjs(),
        typescript({
            typescript: require('typescript'),
        }),
        postCSS({
            plugins: [require('autoprefixer')],
        }),
    ],
};