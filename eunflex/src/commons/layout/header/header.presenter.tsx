import * as S from "./header.styles";

export default function HeaderUI() {
  return (
    <S.Wrapper>
      <S.NetflixImage src="/netflix.png/" />
      <S.Home>홈</S.Home>
      <div>시리즈</div>
      <div>영화</div>
      <div>NEW! 요즘 대세 콘텐츠</div>
      <div>내가 찜한 콘텐츠</div>
      <img src="/search.png/" />
      <div>키즈</div>
      <img src="/bell.png/" />
      <div>Icons</div>
    </S.Wrapper>
  );
}
