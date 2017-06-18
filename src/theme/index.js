export const colors = {
  primary: (op = 1) => `rgba(250, 250, 250, ${op})`,
  primaryBg: (op = 1) => '#212224',
  secondary: (op = 1) => '#231F20',
  secondaryBg: (op = 1) => '#EFF2F5',
  tertiary: () => '',
  tertiaryBg: () => '',
  error: (op = 1) => '#F00000',
  borderColor: (op = 0.1) => `rgba(151, 151, 151, ${op})`
}

export const fonts = {
  regular: "'Roboto', sans-serif"
}
