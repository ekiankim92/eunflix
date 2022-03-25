import { ChangeEvent, useState } from "react";
import LandingUI from "./landing.presenter";

export default function Landing() {
  const [korean, setKorean] = useState<boolean>(false);
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isCost, setIsCost] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (email) {
      setEmailError("");
    }
  };

  const onClickKorean = () => {
    setKorean(true);
  };

  const onClickEnglish = () => {
    setKorean(false);
  };

  const onClickShowMore = () => {
    setIsMore((prev) => !prev);
    setIsCost(false);
  };

  const onClickShowMoreCost = () => {
    setIsCost((prev) => !prev);
    setIsMore(false);
  };

  const onClickGetStarted = () => {
    if (!email) {
      setEmailError("Email is required!");
    }
  };

  return (
    <LandingUI
      korean={korean}
      isMore={isMore}
      isCost={isCost}
      emailError={emailError}
      onChangeEmail={onChangeEmail}
      onClickKorean={onClickKorean}
      onClickEnglish={onClickEnglish}
      onClickShowMore={onClickShowMore}
      onClickShowMoreCost={onClickShowMoreCost}
      onClickGetStarted={onClickGetStarted}
    />
  );
}
