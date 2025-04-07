module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        optimizeConstEnums: true,
        isTSX: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
}
