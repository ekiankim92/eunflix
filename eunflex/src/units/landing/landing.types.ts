import { ChangeEvent } from "react";

export interface PropsLandingUI {
  korean: boolean;
  isMore: boolean;
  isCost: boolean;
  email?: string;
  emailError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickKorean: () => void;
  onClickEnglish: () => void;
  onClickShowMore: () => void;
  onClickShowMoreCost: () => void;
  onClickGetStarted: () => void;
}
