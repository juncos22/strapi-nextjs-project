import SignInForm from "@/components/sign-in-form";
import AuthLayout from "../layout";

export default function SignInRoute() {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold mb-2">Ingresá con tu Cuenta</h1>
      <SignInForm />
    </AuthLayout>
  );
}
