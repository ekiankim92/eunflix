import * as S from "./landing.styles";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { PropsLandingUI } from "./landing.types";

export default function LandingUI(props: PropsLandingUI) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div onClick={props.onClickKorean}>한국어</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div onClick={props.onClickEnglish}>English</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.NetflixImage src="/netflix.png" />
        <S.OptionWrapper>
          <S.Language>
            <S.WorldImage src="/world.png/" />
            <S.BreadcrumbWrapper>
              <S.Breadcrumb overlay={menu} trigger={["click"]}>
                {props.korean ? (
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    한국어 <DownOutlined />
                  </a>
                ) : (
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    English <DownOutlined />
                  </a>
                )}
              </S.Breadcrumb>
            </S.BreadcrumbWrapper>
          </S.Language>
          <S.SignButton>{props.korean ? "로그인" : "Sign In"}</S.SignButton>
        </S.OptionWrapper>
      </S.HeaderWrapper>
      <S.SecondWrapper>
        <S.CatchPhraseOne>
          {props.korean
            ? "영화와 시리즈를 무제한으로."
            : "Unlimited movies, TV"}
        </S.CatchPhraseOne>
        {!props.korean && <S.CatchPhraseTwo>shows, and more.</S.CatchPhraseTwo>}
        <S.CatchPhraseThree>
          {props.korean
            ? "다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다"
            : "Watch anywhere. Cancel Anytime."}
        </S.CatchPhraseThree>
        <S.CatchPhraseFour>
          {props.korean
            ? "시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요"
            : "Ready to watch? Enter your email to create or restart your membership."}
        </S.CatchPhraseFour>
        {props.korean ? (
          <div>
            <S.InputEmail placeholder="이메일 주소" />
            <S.StartButton>시작하기 {">"}</S.StartButton>
          </div>
        ) : (
          <div>
            <S.InputEmail placeholder="Email address" />
            <S.StartButton>Get Started {">"}</S.StartButton>
          </div>
        )}
      </S.SecondWrapper>
    </S.Wrapper>
  );
}
