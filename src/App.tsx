import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
