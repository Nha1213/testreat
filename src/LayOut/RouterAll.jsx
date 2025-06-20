import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../page/Home';
import Navbar from '../page/component/Navbar'

const RouterAll = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
};

export default RouterAll;
