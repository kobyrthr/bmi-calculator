import React from 'react';
import { Card, CardContent, CardTitle } from './card';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';
import InputMetric from './input-metric.jsx';
import { Typography } from './typography';
import InformationBar from './information-bar.jsx';

const FormCard = () => {
  return (
    <Card className="max-w-[564px] h-fit">
      <CardContent className="flex flex-col gap-6 ">
        <CardTitle>Enter your details below</CardTitle>
        <RadioGroup defaultValue="metric">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-2 w-1/2">
              <RadioGroupItem value="metric" id="metric" />
              <Label htmlFor="metric">Metric</Label>
            </div>
            <div className="flex items-center space-x-2 w-1/2">
              <RadioGroupItem value="imperial" id="imperial" />
              <Label htmlFor="imperial">Imperial</Label>
            </div>
          </div>
        </RadioGroup>

        <div className="flex flex-row justify-between gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="height" className="text-grey-500 ">
              <Typography type="preset-7" className="">
                Height
              </Typography>
            </Label>
            <InputMetric id="height" label="Height" placeholder={0} unit="cm" />
          </div>
          <div className="flex flex-col gap-2 text-gre">
            <Label htmlFor="weight" className="text-grey-500">
              <Typography type="preset-7" className="">
                Weight
              </Typography>
            </Label>
            <InputMetric id="weight" label="Weight" placeholder={0} unit="kg" />
          </div>
        </div>
        <InformationBar variant="default" className="w-full max-w-full" />
      </CardContent>
    </Card>
  );
};

export default FormCard;
