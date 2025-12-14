"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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

const SignInForm: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                className="h-12 mb-2"
              />
            </Field>
          </FieldGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="*************"
                required
                className="h-12 mb-2"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="mt-2 flex items-center justify-evenly">
            <Field orientation={"responsive"}>
              <Button type="submit" color="primary">
                Ingresar
              </Button>
              <FieldLegend>No posee una cuenta?</FieldLegend>
              <FieldDescription>
                <Link href={"/signup"} className="text-gray-600 font-medium">
                  Registrate
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
