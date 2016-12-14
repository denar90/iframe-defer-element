import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'iife',
  plugins: [
    resolve({ jsnext: true }),
  ],
};
