import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    // <Layout>
    //   <h1>My React page</h1>
    //   <p>This is a React page</p>
    // </Layout>
    <>
        <h1 className='bg-blue-500 text-center'>My React page</h1>
        <p>This is a React page</p>
        <p className='text-xl'>It uses tailwindcss for styling</p>
    </>
  );
}