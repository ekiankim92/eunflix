import { useState } from "react";
import HeaderUI from "./header.presenter";

export default function Header() {
  const [korean, setKorean] = useState<boolean>(false);

  const onClickKorean = () => {
    setKorean(true);
  };

  const onClickEnglish = () => {
    setKorean(false);
  };

  return (
    <HeaderUI
      korean={korean}
      onClickKorean={onClickKorean}
      onClickEnglish={onClickEnglish}
    />
  );
}
