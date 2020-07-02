const defaultFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

export default {
  typescript: true,
  title: 'Docz / Redoc',
  menu: [
    'Introduction',
    'Getting Started'
  ],
  ignore: [
    'README.md'
  ],
  themeConfig: {
    fonts: {
      body: defaultFonts,
      heading: defaultFonts,
    },
    fontWeights: {
      bold: 500,
      heading: 500,
    },
    showDarkModeSwitch: false,
    showPlaygroundEditor: false,
    styles: {
      root: { fontSize: 2 },
    },
  }
}
