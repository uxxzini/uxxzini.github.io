import React from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const About = () => {
  return (
    <PageLayout>
      {/* 1. 왼쪽 기둥: h-full을 주어 부모의 전체 높이를 따라가게 함 */}
      <div className="col-span-12 md:col-span-6">
        <Card className="h-full">
        </Card>
      </div>

      {/* 2. 중간 기둥: 이 기둥의 전체 높이가 왼쪽 카드의 기준이 됩니다. */}
      <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
        <Card aspect="aspect-square" />
        <Card aspect="aspect-square" />
        <Card aspect="aspect-square" />
      </div>

      {/* 3. 오른쪽 기둥 */}
      <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
        <Card aspect="aspect-square" />
        <Card aspect="flex-1" />
      </div>
    </PageLayout>
  );
};

export default About;