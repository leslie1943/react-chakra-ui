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
  // FormHelperText,
  FormControl,
} from '@chakra-ui/react'
import '../App.css'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'

function Login() {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input
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
            <Input type="password" borderLeftRadius="0" placeholder="" />
            <InputRightAddon children={<FaCheck />} />
          </InputGroup>
        </FormControl>

        <Box style={{ textAlign: 'center' }}>
          <Text> 登录遇到问题</Text>
          <Button
            mt="10px"
            size="md"
            color="#fff"
            height="48px"
            w="100%"
            border="2px"
            bgColor="#187cb7"
            _hover={{ bgColor: 'tomato' }}
          >
            登录
          </Button>
        </Box>
      </Stack>
    </form>
  )
}

export default Login
