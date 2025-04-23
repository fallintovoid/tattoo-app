"use client";

import BaseLayout from "../components/BaseLayout";
import Input from "../ui/Input";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { useActionState } from "react";
import { signup } from "./lib/action";
import Button from "../ui/Button";

export default function SignUp() {
  const [state, action, isPending] = useActionState(signup, { errors: {} });

  return (
    <BaseLayout className="flex justify-center">
      <div className="md:w-xl rounded-lg shadow-lg px-10 py-6 gap-3 flex flex-col items-center bg-base-100 text-base-content">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <h4 className="text-md text-center">
            Sign up to discover talented tattoo artists.
          </h4>
        </div>
        <form className="flex flex-col w-full gap-3" action={action}>
          {state.errors.response && (
            <p className="text-error text-sm">{state.errors.response}</p>
          )}
          <Input
            inputLabel="Username"
            wrapperClassName="w-full"
            icon={<FaUser size={15} />}
            placeholder="Type the username"
            name="username"
            type="text"
            errors={state.errors.username}
          />
          <Input
            inputLabel="Email"
            wrapperClassName="w-full"
            icon={<MdAlternateEmail size={15} />}
            placeholder="Type the email"
            name="email"
            type="email"
            errors={state.errors.email}
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
          <Input
            inputLabel="Repeat password"
            wrapperClassName="w-full"
            placeholder="Type the password"
            icon={<TbLockPassword size={15} />}
            name="password_repeat"
            type="password"
            errors={state.errors.password_repeat}
          />
          <Button type="submit" className="btn-primary" isLoading={isPending}>
            Sign Up
          </Button>
        </form>
      </div>
    </BaseLayout>
  );
}
