import React from 'react';
import './Container.module.scss';

interface ContainerProps {
  children: any
}

function Container({ children } :ContainerProps) {
  return (
    <div className='container'>{children}</div>
  );
}

export default Container;
