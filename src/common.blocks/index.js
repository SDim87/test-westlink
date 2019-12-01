function requireAll(r) { r.keys().forEach(r); }

requireAll(require.context('./', true, /\.(js|less|css)$/));

// requireAll(require.context('./', true, /\.(js|less|png|jpe?g|gif)$/));
