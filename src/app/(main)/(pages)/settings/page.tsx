import { Input } from "@/components/forms";
import { LabelInputContainer } from "@/components/label";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the form schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

const Settings = () => {
  // Initialize form with zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  // Destructure form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-sm">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-3 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer>
              <label htmlFor="firstName">First name</label>
              <Input
                id="firstName"
                placeholder="John Doe"
                type="text"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-5">
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </LabelInputContainer>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;

function zodResolver(
  formSchema: any
): import("react-hook-form").Resolver<z.infer<any>, any> | undefined {
  throw new Error("Function not implemented.");
}
