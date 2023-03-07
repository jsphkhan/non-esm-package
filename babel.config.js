const presets = [
  [
    '@babel/preset-env',
    // will generate commonjs modules
    { modules: 'auto' },
  ],
  '@babel/preset-typescript',
];

module.exports = { presets };
