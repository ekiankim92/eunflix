import * as S from "./registerfooter.styles";
import "antd/dist/antd.css";
import { Menu } from "antd";

export default function RegisterFooterUI() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div>English</div>
      </Menu.Item>
      <Menu.Item key="1">
        <div>한국어</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <S.Wrapper>
      <S.Questions>Questions? Call 080-001-9588</S.Questions>
      <S.OptionsWrapper>
        <S.FirstOptionColumn>
          <S.FAQ>FAQ</S.FAQ>
          <S.Cookie>Cookie Preferences</S.Cookie>
        </S.FirstOptionColumn>
        <S.SecondOptionColumn>
          <S.HelpCenter>Help Center</S.HelpCenter>
          <S.Corporate>Corporate Information</S.Corporate>
        </S.SecondOptionColumn>
        <S.Terms>Terms of Use</S.Terms>
        <S.Privacy>Privacy</S.Privacy>
      </S.OptionsWrapper>
      <S.LanguageWrapper>
        <S.WorldImage src="/blackworld.png/" />
        <S.LanguageDropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            English
          </a>
        </S.LanguageDropdown>
        <S.ArrowImage src="/downarrow.png/" />
      </S.LanguageWrapper>
      <S.FooterOne>
        Netflix Services Korea Ltd. E-Commerce Registration Number: Je
        2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588
      </S.FooterOne>
      <S.AllFooters>Representative: Reginald Shawn Thompson</S.AllFooters>
      <S.AllFooters>Email: korea@netflix.com</S.AllFooters>
      <S.AllFooters>
        Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu,
        Seoul, 03161 Republic of Korea
      </S.AllFooters>
      <S.AllFooters>Business registration number: 165-87-00119</S.AllFooters>
      <S.AllFooters>Hosted by: Amazon Web Services Inc.</S.AllFooters>
      <S.AllFooters>KFTC website</S.AllFooters>
    </S.Wrapper>
  );
}
