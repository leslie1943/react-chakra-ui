import React from 'react'
import {
  Button,
  Box,
  // Text,
  // useColorMode,
  // useColorModeValue,
  // LightMode,
  // DarkMode,
  chakra,
} from '@chakra-ui/react'
import './App.css'

const LaGouButton = chakra('button', {
  baseStyle: {
    borderRadius: 'lg',
  },
  sizes: {
    sm: {
      px: '3',
      py: '1',
      fontSize: '12px',
    },
    md: {
      px: '4',
      py: '2',
      fontSize: '14px',
    },
  },
  variants: {
    primary: {
      bgColor: 'blue.500',
      color: 'white',
    },
    danger: {
      bgColor: 'red.500',
      color: 'white',
    },
  },
})

LaGouButton.defaultProps = {
  size: 'sm',
  variant: 'primary',
}

function App() {
  // 模式切换
  // const { colorMode, toggleColorMode } = useColorMode()
  // 通过 useColorModeValue 钩子函数 设置 light/dark不同得样式
  // const bgColor = useColorModeValue('tomato', 'skyblue')
  return (
    <Box
      w="100vw"
      h="100vh"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        bgColor="#187cb7"
      >
        登录
      </Button>
      {/* <Text>current mode: {colorMode}</Text>
      <Button onClick={toggleColorMode}>切换颜色模式</Button>
      <LightMode>
        <Button m="10px">In LightMode</Button>
      </LightMode>
      <DarkMode>
        <Button borderRadius="lg" m="10px">
          In DarkMode
        </Button>
      </DarkMode> */}
      {/* 响应式 */}
      {/* <Box
        h="200px"
        w={['100px', '300px', '500px', '700px', '1000px']}
        fontSize={['12px', '14px', '16px', '18px', '20px']}
        bgColor="lightcoral"
      >
        Hello Chakra UI
      </Box> */}
      {/* 6: spaces 属性 的值  */}
      {/* 2xs: sizes 属性的值  */}
      {/* <Box my="6" w="2xs" h="10" bgColor="blue.500"></Box>
      <Box w="200px" h="200px" bgColor="cyan.500"></Box>
      <Box w="200px" h="200px" bgColor="pink.500"></Box>
      <LaGouButton size="md" variant="danger">
        我是自定义按钮
      </LaGouButton> */}
    </Box>
  )
}

export default App
