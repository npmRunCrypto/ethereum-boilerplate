import { Radio, RadioGroup } from "@chakra-ui/react";
import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const CpayRadio: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <RadioGroup value={value} onChange={(selectValue) => onChange(selectValue)}>
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default CpayRadio;
