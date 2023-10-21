import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import AuthContextContainer from './contexts/AuthContext';
import WorkoutContextContainer from './contexts/WorkoutContext';
import router from './routes/index.jsx';
import { toastOptions } from './utils/constants/misc.constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextContainer>
      <AuthContextContainer>
        <ChakraProvider toastOptions={{ defaultOptions: toastOptions }}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthContextContainer>
    </WorkoutContextContainer>
  </React.StrictMode>
);
