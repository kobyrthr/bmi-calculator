import React from 'react';
import IconEating from '@/../public/assets/images/icon-eating.svg';
import IconExercise from '@/../public/assets/images/icon-exercise.svg';
import IconSleep from '@/../public/assets/images/icon-sleep.svg';
import Image from 'next/image';
import { Typography } from './typography';

const TipsSection = () => {
  const tips = [
    {
      id: 1,
      icon: IconEating,
      title: 'Healthy eating',
      description:
        'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    },
    {
      id: 2,
      icon: IconExercise,
      title: 'Regular exercise',
      description:
        'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
    },
    {
      id: 3,
      icon: IconSleep,
      title: 'Adequate sleep',
      description:
        'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative px-10 py-2.5">
      <div className="flex py-20.5 items-center justify-center gap-8 bg-linear-to-r from-white to-gradient-2/25 rounded-r-[35px] w-full">
        {tips.map((item) => (
          <div key={item.id} className="max-w-[365px]">
            <Image src={item.icon} alt="icon-eating" height={64} width={64} />
            <Typography type="preset-4" className="mt-12">
              {item.title}
            </Typography>
            <Typography type="preset-6" className="font-normal mt-6">
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;
