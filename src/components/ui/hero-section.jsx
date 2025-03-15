import React from 'react';
import LogoSvg from '@/../public/assets/images/logo.svg';
import Image from 'next/image';
import { Typography } from './typography';
import FormCard from './form-card';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="absolute z-0 inset-0 right-2/6 bg-linear-to-r from-white to-gradient-2 rounded-b-[35px]"></div>
      <div className="max-w-[1160px] py-[88px] z-10 pb-[121px]">
        <Image src={LogoSvg} alt="logo" className="self-start mb-6" />
        <div className="flex flex-row gap-8">
          <div className="flex flex-col max-w-[564px] py-[72px] gap-8">
            <Typography type="preset-1" className=" text-blue-900 pr-12">
              Body Mass Index Calculator
            </Typography>
            <Typography
              type="preset-6"
              className="text-grey-500 font-normal  pr-24"
            >
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Typography>
          </div>
          <FormCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
