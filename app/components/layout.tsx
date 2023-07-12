'use client';

import React from 'react';
import Navbar from './features/Navbar';

const IndexLayout = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default IndexLayout;
