import { useRouter } from "next/router";
import RegisterHeaderUI from "./registerheader.presenter";

export default function RegisterHeader() {
  const router = useRouter();

  const onClickLandingPage = () => {
    router.push("/landingpage");
  };

  const onClickSignIn = () => {
    router.push("/signin")
  }

  return <RegisterHeaderUI onClickLandingPage={onClickLandingPage} onClickSignIn={onClickSignIn}/>;
}
