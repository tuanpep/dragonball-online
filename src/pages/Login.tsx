import React from 'react';
import background4 from '../assets/images/background4.png';
import { Button } from '@chakra-ui/react';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className=" bg-purple-400 " style={{ backgroundImage: `url(${background4})` }}>
      <div className="backdrop-brightness-50 min-h-screen flex justify-center items-center">
        <div className="py-12 backdrop-brightness-50 px-12 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-green-900 text-center mb-4 cursor-pointer">
              Đăng nhập
            </h1>
            <p className="w-80 text-center text-green-700 text-sm mb-8 font-semibold tracking-wide cursor-pointer">
              Đăng nhập để sử dụng các tính năng của ứng dụng
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              className="block text-sm py-3 px-4 rounded-lg w-full border-yellow-300 border-2 outline-none"
            />
            <input
              type="text"
              placeholder="Mật khẩu"
              className="block text-sm py-3 px-4 rounded-lg w-full border-yellow-300 border-2 outline-none"
            />
          </div>
          <div className="text-center mt-6">
            <Button
              bg={'green.500'}
              color={'white'}
              w={'full'}
              _hover={{
                bg: 'green.600',
              }}
            >
              Đăng nhập
            </Button>
            <p className="mt-4 text-sm">
              Chưa có tài khoản? <span className="underline cursor-pointer"> Đăng ký</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
