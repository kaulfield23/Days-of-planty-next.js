import Navbar from '@/features/Navbar';
import React from 'react';

const IndexLayout = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default IndexLayout;
