import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import theme from '@chakra-ui/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

console.info('theme', theme)
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: 'light',
// }
// const customTheme = extendTheme({ config })

// 1. 设置默认颜色模式
theme.config.initialColorMode = 'light'

// 2.使用操作系统使用的颜色模式
// theme.config.useSystemColorMode = true

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
