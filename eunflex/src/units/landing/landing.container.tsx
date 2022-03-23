import { useState } from "react";
import LandingUI from "./landing.presenter";

export default function Landing() {
  const [korean, setKorean] = useState<boolean>(false);
  const [isMore, setIsMore] = useState<boolean>(false);

  const onClickKorean = () => {
    setKorean(true);
  };

  const onClickEnglish = () => {
    setKorean(false);
  };

  const onClickShowMore = () => {
    setIsMore((prev) => !prev);
  };

  return (
    <LandingUI
      korean={korean}
      isMore={isMore}
      onClickKorean={onClickKorean}
      onClickEnglish={onClickEnglish}
      onClickShowMore={onClickShowMore}
    />
  );
}
