// app/pages/[id]/page.tsx

import React from 'react';
import ClientProjectDetail from './ClientProjectDetail';
import Layout from '@/app/layout'; // Adjust the path if necessary

export async function generateStaticParams() {
  // Static data for demonstration
  const projects = [
    { id: '1', title: 'Project 1', description: 'Detailed description of Project 1.', imageUrl: '/KBH00.github.io/vercel.svg' },
    { id: '2', title: 'Project 2', description: 'Detailed description of Project 2.', imageUrl: '/KBH00.github.io/vercel.svg' },
    { id: '3', title: 'Project 3', description: 'Detailed description of Project 3.', imageUrl: '/KBH00.github.io/vercel.svg' },
    { id: '4', title: 'Project 4', description: 'Detailed description of Project 4.', imageUrl: '/KBH00.github.io/vercel.svg' },

  ];

  return projects.map((project) => ({
    id: project.id,
  }));
}

const Page: React.FC = () => {
  return (
    <Layout>
      <ClientProjectDetail />
    </Layout>
  );
};

export default Page;
