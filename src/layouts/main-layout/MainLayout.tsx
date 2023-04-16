import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
