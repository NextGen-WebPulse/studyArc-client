import CustomFormField from "@/components/CustomFormField";
import { CustomSelect } from "@/components/CustomSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { registerInputs } from "@/constants/formInput";
import { RegistrationSchema } from "@/schema/authSchema"; //schema
import { TRegisterSchema } from "@/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Register() {
  const defaultValues = registerInputs.reduce(
    (acc, input) => ({ ...acc, [input.name]: "" }),
    {},
  );
  const form = useForm<TRegisterSchema>({
    defaultValues,
    resolver: zodResolver(RegistrationSchema),
  });

  const onSubmit = (formData: TRegisterSchema) => {
    console.log(formData);
  };

  return (
    <div className="container-responsive">
      <h1 className="mb-2 py-2 text-center text-3xl font-bold text-customGray">
        Sign Up! To be part of StudyArc
      </h1>

      {/* form section  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {registerInputs.map((input) =>
            input.type !== "select" ? (
              <CustomFormField key={input.id} input={input} form={form} />
            ) : (
              <CustomSelect key={input.id} form={form} />
            ),
          )}
          <Button className="w-full rounded-full bg-primary-500 py-5 text-lg hover:bg-primary-600">
            Signup
          </Button>
        </form>
      </Form>
    </div>
  );
}
