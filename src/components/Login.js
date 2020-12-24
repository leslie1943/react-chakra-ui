import React from 'react'
import {
  Button,
  Stack,
  Box,
  InputGroup,
  Input,
  Text,
  InputLeftAddon,
  InputRightAddon,
  Checkbox,
  FormControl,
  Flex,
  Spacer,
  Link,
  Divider,
  useToast,
} from '@chakra-ui/react'
import '../App.css'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'
import { useUpdateInput } from '../hooks/input'
import axios from 'axios'

function Login() {
  const toast = useToast()
  const email = useUpdateInput('')
  const password = useUpdateInput('')

  const onLogin = async () => {
    try {
      const params = {
        user: {
          email: email.value,
          password: password.value,
        },
      }
      const res = await axios.post(
        'https://conduit.productionready.io/api/users/login',
        params
      )
      console.info('res-reg', res)
      if (res.status === 200) {
        toast({
          title: 'Login',
          description: 'Login successfully, Start to do something',
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
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input
              {...email}
              type="text"
              borderLeftRadius="0"
              placeholder="请输入手机或邮箱"
            />
          </InputGroup>
          {/* <FormHelperText>请输入用户名</FormHelperText> */}
        </FormControl>

        <FormControl>
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
        </FormControl>

        <Box>
          <Flex align="center">
            <Checkbox size="sm" defaultIsChecked>
              记住我
            </Checkbox>
            <Spacer />
            <Text>
              <Link color="blue.500" href="https://www.baidu.com/" isExternal>
                登录遇到问题
              </Link>
            </Text>
          </Flex>
          <Button
            mt="10px"
            size="md"
            color="#fff"
            height="48px"
            w="100%"
            border="2px"
            bgColor="#187cb7"
            _hover={{ bgColor: 'tomato' }}
            onClick={onLogin}
          >
            登录
          </Button>
        </Box>
        <Text>使用社交账户登录</Text>
        <Divider orientation="horizontal"></Divider>
      </Stack>
    </form>
  )
}

export default Login
