module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Ensures compatibility with the Node.js version used for tests
        },
      },
    ],
    '@babel/preset-react',
  ],
};
