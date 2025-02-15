import { TLoginInputs, TRegisterInputs } from "@/constants/formInput";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import React from "react";

type CustomFormFieldProps = {
  input: TRegisterInputs | TLoginInputs;
  form: any;
};

const CustomFormField: React.FC<CustomFormFieldProps> = ({ input, form }) => {
  return (
    <FormField
      control={form.control}
      name={input.name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={input.placeholder}
              type={input.type}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};

export default CustomFormField;
