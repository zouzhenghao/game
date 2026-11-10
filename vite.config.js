// Vite config — relative base so the build works both from a subpath
// (GitHub Pages project site at /game/) and from the local filesystem.
export default {
  base: './',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
  },
};
