import SignUpForm from "@/components/sign-up-form";
import AuthLayout from "../layout";

export default function SignUpRoute() {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold mb-2">Crea tu Cuenta</h1>
      <SignUpForm />
    </AuthLayout>
  );
}
