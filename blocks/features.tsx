import React from "react";
import { FeaturesArray } from "../constants/features";
import FeatureCard from "../partials/features/FeatureCard";

const Features = () => {
  return (
    <div className="sm:mt-[55px] sm:pt-[60px] pb-[80px] feature-block-bg">
      <div className="container   flex items-center flex-col ">
        <div className="max-w-[440px] text-center">
          <p className="subtitle">Our Community</p>

          <p className="big-title mt-[9px]">Community Main Feature</p>

          <p className="description-text mt-[19px]">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>

        <div className="mt-[64px] grid grid-cols-1 lg:grid-cols-2 md:grid-rows-3 gap-[44px] items-start">
          {FeaturesArray.map(({ description, ...props }) => (
            <FeatureCard key={description} {...props}>
              {description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
