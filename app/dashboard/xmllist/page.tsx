// pages/index.js
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPageComponent = dynamic(() => import('@/app/ui/dashboard/xml-list'), {
  ssr: false, // This line makes sure the component is not server-side rendered
});

const IndexPage = () => {
  return (
    <div>
      <h1>My Next.js App</h1>
      <DynamicPageComponent />
    </div>
  );
};

export default IndexPage;
