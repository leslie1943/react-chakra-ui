import React from 'react'
import {
  Button,
  Box,
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck, FaUserAstronaut } from 'react-icons/fa'
import '../App.css'
import axios from 'axios'
import { useUpdateInput } from '../hooks/input'

function Login() {
  const toast = useToast()
  const username = useUpdateInput('')
  const email = useUpdateInput('')
  const password = useUpdateInput('')

  const onRegister = async () => {
    try {
      const params = {
        user: {
          username: username.value,
          email: email.value,
          password: password.value,
        },
      }
      const res = await axios.post(
        'https://conduit.productionready.io/api/users',
        params
      )
      console.info('res-reg', res)
      if (res.status === 200) {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (errors) {
      toast({
        title: 'Error',
        description: errors.toString(),
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }
  // 模式切换
  // const { colorMode, toggleColorMode } = useColorMode()
  // 通过 useColorModeValue 钩子函数 设置 light/dark不同得样式
  // const bgColor = useColorModeValue('tomato', 'skyblue')
  return (
    <Box>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children={<FaUserAlt />} />
          <Input {...email} type="text" placeholder="请输入手机或邮箱" />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input
            {...password}
            type="password"
            borderLeftRadius="0"
            placeholder="请输入密码"
          />
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<FaUserAstronaut />} />
          <Input {...username} type="text" placeholder="请输入用户昵称" />
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
          onClick={onRegister}
        >
          注册
        </Button>
      </Box>
      <Text mt="2" color="gray.400">
        点击 “注册” 即表示您同意并愿意遵守简书
      </Text>
      <Text mt="1">
        <Link
          pr="2"
          color="blue.500"
          href="https://www.jianshu.com/p/c44d171298ce"
          isExternal
        >
          用户协议
        </Link>
        和
        <Link
          pl="2"
          color="blue.500"
          href="https://www.jianshu.com/p/2ov8x3"
          isExternal
        >
          隐私政策
        </Link>
        。
      </Text>
    </Box>
  )
}

export default Login
