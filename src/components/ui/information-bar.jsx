import React from 'react';
import { Typography } from './typography';
import { cva } from 'class-variance-authority';

const informationBarVariants = cva(
  'p-8 rounded-2xl sm:rounded-l-2xl sm:rounded-r-[99px] bg-blue-500 text-white flex', // base styles
  {
    variants: {
      variant: {
        default: 'flex-col',
        bmi: 'flex-col items-start min-[540px]:items-start min-[540px]:flex-row gap-6',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const InformationBar = ({ bmi = 0, variant, className, ...props }) => {
  bmi = parseFloat(bmi);
  return (
    <div className={informationBarVariants({ variant, className })} {...props}>
      {variant === 'default' ? (
        <>
          <Typography type="preset-4" className="text-white">
            Welcome!
          </Typography>
          <Typography type="preset-7" className="text-white">
            Enter your height and weight and you'll see your BMI result here
          </Typography>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2 w-1/2">
            <Typography type="preset-6" className="text-white">
              Your BMI is...
            </Typography>
            <Typography
              type="preset-1"
              className="text-white max-w-[4ch] overflow-x-auto overflow-y-hidden"
            >
              {bmi === 0 ? bmi : bmi.toFixed(1)}
            </Typography>
          </div>

          <Typography
            type="preset-7"
            className="text-white w-1/2 max-w-[206px]"
          >
            Your BMI suggests you're a healthy weight. Your ideal weight is
            between <span className="font-bold">63.3kgs - 85.2kgs</span>.
          </Typography>
        </>
      )}
    </div>
  );
};

export default InformationBar;
