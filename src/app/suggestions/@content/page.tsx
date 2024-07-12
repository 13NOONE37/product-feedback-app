import React from 'react';

const Page = async () => {
  await new Promise((res, req) => {
    setTimeout(() => {
      return res(true);
    }, 2000);
  })
    .then(() => {})
    .catch(() => {});

  // throw new Error('Could not load feedback');
  return (
    <div>
      <nav>nav</nav>
      <main>main</main>
      {/* this all will be client side */}
    </div>
  );
};

export default Page;
