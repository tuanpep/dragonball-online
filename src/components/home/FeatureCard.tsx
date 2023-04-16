import { Button } from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function FeatureCard() {
  return (
    <div className="max-w-md p-6 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-500">
      <svg
        className="w-10 h-10 mb-2 text-green-500"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
          clip-rule="evenodd"
        ></path>
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
      </svg>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-500">Nạp Coin</h5>
      </a>
      <p className="mb-3 font-normal text-green-5">
        Thanh toán hoàn toàn tự động, xử lý nhanh sau 1 - 5 phút.
      </p>
      <Button
        colorScheme={'red'}
        bg={'red.400'}
        rounded={'full'}
        px={6}
        _hover={{
          bg: 'red.500',
        }}
      >
        Nạp Coin
      </Button>
    </div>
  );
}
