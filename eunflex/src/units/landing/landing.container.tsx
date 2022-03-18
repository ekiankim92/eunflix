import { useState } from "react";
import LandingUI from "./landing.presenter";

export default function Landing() {
  const [korean, setKorean] = useState<boolean>(false);

  const onClickKorean = () => {
    setKorean(true);
  };

  const onClickEnglish = () => {
    setKorean(false);
  };

  return (
    <LandingUI
      korean={korean}
      onClickKorean={onClickKorean}
      onClickEnglish={onClickEnglish}
    />
  );
}
