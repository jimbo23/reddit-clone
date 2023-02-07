import React from 'react';
import { NavBar } from '../NavBar/NavBar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
