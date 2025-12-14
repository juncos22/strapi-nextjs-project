"use client";
import React, { useActionState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { actions } from "@/actions";
import { type FormState } from "@/validations/auth";
import InputError from "./input-error";

const INITIAL_STATE: FormState = {
  data: {
    username: "",
    email: "",
    password: "",
  },
};

const SignUpForm: React.FC = () => {
  const [formState, formAction] = useActionState(
    actions.auth.registerUserAction,
    INITIAL_STATE
  );
  console.log(formState);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Registrate</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Username</FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="carlos.perez123"
                required
                className="h-12 mb-2"
                defaultValue={formState.data?.username ?? ""}
              />
            </Field>
            <InputError errors={formState.zodErrors?.fieldErrors.username} />
          </FieldGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                className="h-12 mb-2"
                defaultValue={formState.data?.email ?? ""}
              />
            </Field>
            <InputError errors={formState.zodErrors?.fieldErrors.email} />
          </FieldGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="*************"
                required
                className="h-12 mb-2"
                defaultValue={formState.data?.password ?? ""}
              />
            </Field>
            <InputError errors={formState.zodErrors?.fieldErrors.password} />
          </FieldGroup>
          <FieldGroup className="mt-2 flex items-center justify-evenly">
            <Field orientation={"responsive"}>
              <Button type="submit" color="primary">
                Crear Cuenta
              </Button>
              <FieldLegend>Ya posee una cuenta?</FieldLegend>
              <FieldDescription>
                <Link href={"/signin"} className="text-gray-600 font-medium">
                  Ingresá
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        {formState.strapiErrors && (
          <p className="text-red-500">{formState.strapiErrors?.message}</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
