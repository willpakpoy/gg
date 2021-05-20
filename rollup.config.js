import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import { babel } from '@rollup/plugin-babel';
import replace from "rollup-plugin-replace";
import copy from "rollup-plugin-copy";

//import alias from 'rollup-plugin-alias';



export default {
    input: 'src/scripts/main.js',
    output: {
        file: path.resolve("build/static/build/main.js"),
        format: 'iife',
        name: "bundle"
    },
    plugins: [
        nodeResolve(), 
        postcss({
            // Or with custom file name, it will generate file relative to bundle.js in v3
            extract: path.resolve('build/static/build/universal.css')
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
        babel({ 
            babelHelpers: 'bundled'
        }),
        copy({
            targets: [{ src: 'src/assets', dest: 'build/static' }]
        })
    ]
  };
