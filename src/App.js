import React from 'react'
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  // Button,
  useColorMode,
  // useColorModeValue,
  Image,
  Flex,
  Text,
  Switch,
} from '@chakra-ui/react'
import Login from './components/Login'
import Register from './components/Register'
import jian from './jian.png'

function App() {
  const { toggleColorMode } = useColorMode()
  // 通过 useColorModeValue 钩子函数 设置 light/dark不同得样式
  // const bgColor = useColorModeValue('gray.200', 'gray.500')
  // const imgUI = useColorModeValue('bg_light.png', 'bg_dark')
  return (
    <Box bgColor="blackAlpha.300">
      <Box mx="10" minH="60px" textAlign="center">
        <Flex align="center" justify="space-between">
          <Text
            p="4"
            as="h1"
            color="facebook.500"
            fontWeight="bold"
            fontSize="lg"
          >
            <Flex>
              {/* <Text color="tomato">JIAN SHU</Text> */}
              <Text color="tomato">乘风破浪会有时,直挂云帆济沧海</Text>
            </Flex>
          </Text>
          <Box p="4">
            <Switch size="lg" onChange={toggleColorMode} /> 模式切换
          </Box>
        </Flex>
      </Box>
      <Box className="sign">
        <Box className="sign-container2">
          <Box className="main" style={{ marginTop: '10%' }}>
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
    </Box>
  )
}

export default App
