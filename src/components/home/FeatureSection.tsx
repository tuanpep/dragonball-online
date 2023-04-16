import React from 'react';
import FeatureCard from './FeatureCard';

type Props = {};

const FeatureSection = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {[1, 2, 3, 4].map((item, index) => (
        <FeatureCard />
      ))}
    </div>
  );
};

export default FeatureSection;
