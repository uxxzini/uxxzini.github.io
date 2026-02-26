import React from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const Home = () => {
  return (
    <PageLayout>

       <Card colSpan="md:col-span-6" aspect="aspect-[2/1]">
       </Card>

       <Card colSpan="md:col-span-6" aspect="aspect-[2/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

    </PageLayout>
  );
};

export default Home;