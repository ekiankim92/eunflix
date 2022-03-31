import * as S from "./signin.styles";
import RegisterFooterBlk from "../../commons/registerfooterblk/registerfooterblk.container";

export default function SignInUI() {
  return (
    <>
      <S.Wrapper>
        <S.NetflixImage src="/netflix.png/" />
        <S.SignInWrapper>
          <S.SignIn>Sign In</S.SignIn>
          <input type="text" />
          <input type="password" />
          <button>Sign In</button>
        </S.SignInWrapper>
      </S.Wrapper>
      <RegisterFooterBlk />
    </>
  );
}
