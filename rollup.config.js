/**
 * * Created by lee on 2018/2/2
 *
 * umd name
 * http://www.rollupjs.com/big-list-of-options/
 */
import babel from 'rollup-plugin-babel';

const GLOBAL = 'SD';

export default {
    input: `src/index.js`,
    output: {
        format: 'umd',
        name: 'SD',
        file: `dist/index.js`,
        globals: {}
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    external: []
};
