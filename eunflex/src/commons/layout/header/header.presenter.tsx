import * as S from "./header.styles";

export default function HeaderUI() {
  return (
    <S.Wrapper>
      <S.NetflixImage src="/netflix.png/" />
      <S.ContentsWrapper>
        <S.Home>홈</S.Home>
        <S.Series>시리즈</S.Series>
        <S.Movies>영화</S.Movies>
        <S.Trends>NEW! 요즘 대세 콘텐츠</S.Trends>
        <S.MyPicks>내가 찜한 콘텐츠</S.MyPicks>
      </S.ContentsWrapper>
      <S.IconsWrapper>
        <S.SearchIcon src="/search.png/" style={{ color: "white" }} />
        <S.Kids>키즈</S.Kids>
        <S.BellIcon src="/bell.png/" style={{ color: "white" }} />
        <S.ProfileIcons>Profile Icons</S.ProfileIcons>
      </S.IconsWrapper>
    </S.Wrapper>
  );
}
