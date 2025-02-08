import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  let config = {};
  if (mode === 'dev') {
    config = {
      base: './',
      define: {
        'process.env': {
          NODE_ENV: mode,
        },
      },
      server: {
        port: 3001,
        open: true,
      },
    };
  } else if (mode === 'prod') {
    config = {
      external: ['three'],
      build: {
        sourcemap: true,
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'ThreePlot',
          fileName: 'ThreePlot',
          formats: ['es', 'umd'],
        },
        rollupOptions: {
          external: [ 'three', 'THREE'],
        },
        CompressionStream: false,
      },
    };
  }

  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@examples': path.resolve(__dirname, './examples'),
    },
  };
  return config;
});
