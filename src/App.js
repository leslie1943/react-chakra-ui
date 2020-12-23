import React from 'react'
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  // Button,
  // useColorMode,
  // useColorModeValue,
  Image,
  // Flex,
} from '@chakra-ui/react'
import Login from './components/Login'
import Register from './components/Register'
import jian from './jian.png'

function App() {
  // const { toggleColorMode } = useColorMode()
  // 通过 useColorModeValue 钩子函数 设置 light/dark不同得样式
  // const bgColor = useColorModeValue('gray.200', 'gray.500')
  // const imgUI = useColorModeValue('bg_light.png', 'bg_dark')
  return (
    <Box className="sign" style={{ overflow: 'hidden' }}>
      <Box className="sign-container2">
        <Box className="main" style={{ marginTop: '50%' }}>
          <Image src={jian} mx="auto" mt="2" mb="2" />
          <Tabs isFitted>
            <TabList>
              <Tab _focus={{ boxShadow: 'none' }}>登录</Tab>
              <Tab _focus={{ boxShadow: 'none' }}>注册</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Register />
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* <Box>
            <Button
              bgColor={bgColor}
              size="sm"
              w="100%"
              onClick={toggleColorMode}
            >
              切换颜色模式
            </Button>
          </Box> */}
        </Box>
      </Box>
    </Box>
  )
}

export default App
