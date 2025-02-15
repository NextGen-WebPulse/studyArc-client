import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginInputs } from "@/constants/formInput";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { setCredential } from "@/redux/features/auth/authSlice";
import { LoginSchema } from "@/schema/authSchema";
import { TError } from "@/types/errors";
import { TLoginSchema } from "@/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [login, { isLoading }] = useLoginUserMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location?.state?.from || "/";
  console.log(from);

  const defaultValues = loginInputs.reduce(
    (acc, input) => ({ ...acc, [input.name]: "" }),
    {},
  );
  // react-hook-form
  const form = useForm<TLoginSchema>({
    defaultValues,
    resolver: zodResolver(LoginSchema),
  });

  // action
  const onSubmit = async (formData: TLoginSchema) => {
    const loginPromise = login(formData).unwrap();
    toast.promise(loginPromise, {
      loading: "Logging in...",
      success: (response) => <b>{response.message}</b>,
      error: (error) => <b>{error.data.message}</b>,
    });

    try {
      const res = await loginPromise;

      if (res.success) {
        dispatch(setCredential({ accessToken: res.data.accessToken }));

        navigate(from);
      }
    } catch (error) {
      console.error("Login failed");
      console.error((error as TError).data.message);
    }
  };

  return (
    <div className="container-responsive">
      <h2 className="text-center">Welcome Back! to your StudyArc</h2>
      {/* form section  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {loginInputs.map((input) => (
            <CustomFormField key={input.id} input={input} form={form} />
          ))}
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full rounded-full bg-primary-500 py-5 text-lg hover:bg-primary-600"
          >
            {isLoading ? "Loging in..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
