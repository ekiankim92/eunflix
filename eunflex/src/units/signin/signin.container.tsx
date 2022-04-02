import SignInUI from "./signin.presenter";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const [learnMore, setLearnMore] = useState(false);

  const onClickLearnMore = () => {
    setLearnMore(true);
  };

  const onClickRegister = () => {
    router.push("/register");
  };

  return (
    <SignInUI
      learnMore={learnMore}
      onClickLearnMore={onClickLearnMore}
      onClickRegister={onClickRegister}
    />
  );
}
