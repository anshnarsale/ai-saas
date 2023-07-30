import React, { ReactNode } from 'react';

const Authlayout = ({ children }: { children: ReactNode }) => {
    return (
      <div className='flex items-center justify-center h-full pt-0'>
        {children}
      </div>
    );
  };

export default Authlayout;