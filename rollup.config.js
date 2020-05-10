import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    sourcemap: 'inline',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    sourcemaps(),
    serve({
      port: 8001,
      host: '0.0.0.0',
      contentBase: ''
    }),
    livereload(),
  ],
};
