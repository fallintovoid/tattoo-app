"use client";

import { useActionState } from "react";
import BaseLayout from "../components/BaseLayout";
import Input from "../ui/Input";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { signin } from "./lib/action";
import Button from "../ui/Button";

export default function SignIn() {
  const [state, action, isPending] = useActionState(signin, { errors: {} });

  return (
    <BaseLayout className="flex justify-center">
      <div className="md:w-xl rounded-lg shadow-lg px-10 py-6 gap-3 flex flex-col items-center bg-base-100 text-base-content">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">Log in to your Account</h2>
          <h4 className="text-md text-center">
            Sign in to discover talented tattoo artists.
          </h4>
        </div>
        <form className="flex flex-col w-full gap-3" action={action}>
          {state.errors.response && (
            <p className="text-error text-sm">{state.errors.response}</p>
          )}
          <Input
            inputLabel="Username or email"
            wrapperClassName="w-full"
            icon={<FaUser size={15} />}
            placeholder="Type the username or email"
            name="username"
            errors={state.errors.username}
          />
          <Input
            inputLabel="Password"
            wrapperClassName="w-full"
            placeholder="Type the password"
            icon={<TbLockPassword size={15} />}
            name="password"
            type="password"
            errors={state.errors.password}
          />
          <Button
            type="submit"
            isLoading={isPending}
            className="btn btn-primary"
          >
            Sign in
          </Button>
        </form>
      </div>
    </BaseLayout>
  );
}
