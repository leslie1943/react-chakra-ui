import React from 'react'
import {
  Button,
  Box,
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck, FaUserAstronaut } from 'react-icons/fa'
import '../App.css'

function Login() {
  // 模式切换
  // const { colorMode, toggleColorMode } = useColorMode()
  // 通过 useColorModeValue 钩子函数 设置 light/dark不同得样式
  // const bgColor = useColorModeValue('tomato', 'skyblue')
  return (
    <Box>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children={<FaUserAlt />} />
          <Input type="phone" placeholder="请输入手机或邮箱" />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" borderLeftRadius="0" placeholder="" />
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<FaUserAstronaut />} />
          <Input type="text" placeholder="" />
        </InputGroup>
      </Stack>
      <Box style={{ textAlign: 'center' }}>
        <Button
          mt="10px"
          size="md"
          color="#fff"
          height="48px"
          w="100%"
          border="2px"
          bgColor="#3db922"
          _hover={{ bgColor: 'tomato' }}
        >
          注册
        </Button>
      </Box>
    </Box>
  )
}

export default Login
