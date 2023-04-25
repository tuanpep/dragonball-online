import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="backdrop-brightness-75">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
