import React from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const Home = () => {
  return (
    <PageLayout>
      {/* LEFT SECTION (6 Columns) */}
      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">

        <Card aspect="aspect-square" colSpan="col-span-12" />

        <Card aspect="aspect-[150/73]" colSpan="col-span-12" />

        <div className="grid grid-cols-2 gap-4">
          <Card aspect="aspect-square" colSpan="col-span-1"/>
          <Card aspect="aspect-square" colSpan="col-span-1"/>
        </div>


        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Card aspect="aspect-square" colSpan="col-span-1" />
            <Card aspect="aspect-square" colSpan="col-span-1" />
          </div>
          
          <Card className="h-full" colSpan="col-span-1" />
        </div>
      </div>

      {/* RIGHT SECTION (6 Columns) */}
      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">

        <Card aspect="aspect-[150/73]" />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Card aspect="aspect-square" colSpan="col-span-1" /> 
            <Card aspect="aspect-square" colSpan="col-span-1" /> 
          </div>
          
          <Card className="h-full" colSpan="col-span-1" />
        </div>

        <Card aspect="aspect-[150/73]" />

        <div className="grid grid-cols-2 gap-4">
          <Card aspect="aspect-square" colSpan="col-span-1" /> 
          <Card aspect="aspect-square" colSpan="col-span-1" /> 
          <Card aspect="aspect-square" colSpan="col-span-1" /> 
          <Card aspect="aspect-square" colSpan="col-span-1" /> 
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;