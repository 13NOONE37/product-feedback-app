import React, { FC, ReactNode } from 'react';

const Layout: FC<{
  header: ReactNode;
  content: ReactNode;
}> = ({ header, content }) => {
  return (
    <div>
      {header}
      {content}
    </div>
  );
};

export default Layout;
