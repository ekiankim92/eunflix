import * as S from "./registerheader.styles";
import { PropsRegisterHeaderUI } from "./registerheader.types";

export default function RegisterHeaderUI(props: PropsRegisterHeaderUI) {
  return (
    <>
      <S.Wrapper>
        <S.NetflixImage
          src="/netflix.png/"
          onClick={props.onClickLandingPage}
        />
        <S.SignIn>Sign in</S.SignIn>
      </S.Wrapper>
    </>
  );
}
