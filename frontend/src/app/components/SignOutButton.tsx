import React from "react";
import { signOut } from "../actions/sign-out";
import Button from "../ui/Button";

const SignOutButton = () => {
  return (
    <form action={signOut}>
      <Button
        type="submit"
        className="btn btn-outline btn-primary rounded-xl p-2"
      >
        Sign out
      </Button>
    </form>
  );
};

export default SignOutButton;
