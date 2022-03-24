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
    <>
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
          {!props.korean && (
            <S.CatchPhraseTwo>shows, and more.</S.CatchPhraseTwo>
          )}
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
      <S.ThirdWrapper>
        <S.ThirdLeftSection>
          <S.ThirdTitle>Enjoy on your TV.</S.ThirdTitle>
          <S.ThirdContents>
            Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV,
            Blu-ray players, and <br /> more.
          </S.ThirdContents>
        </S.ThirdLeftSection>
        <S.ThirdRightSection>
          <S.TelevisionImage src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
          <S.TelevisionVideo controls autoPlay muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </S.TelevisionVideo>
        </S.ThirdRightSection>
      </S.ThirdWrapper>
      <S.FourthWrapper>
        <S.FourthLeftSection>
          <S.PhoneImage src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </S.FourthLeftSection>
        <S.StrangerWrapper>
          <S.StrangerImage src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
          <S.InnerStrangerWrapper>
            <S.StrangerThings>Stranger Things</S.StrangerThings>
            <S.Downloading>Downloading...</S.Downloading>
          </S.InnerStrangerWrapper>
          {/* <S.DownloadImg src="/downloading.png/" /> */}
          <S.DownloadImg src="https://ak.picdn.net/shutterstock/videos/22287508/thumb/1.jpg" />
        </S.StrangerWrapper>
        <S.FourthRightSection>
          <S.FourthTitle>
            Download your shows <br /> to watch offline.
          </S.FourthTitle>
          <S.FourthContents>
            Save your favorites easily and always have <br /> somethiing to
            watch.
          </S.FourthContents>
        </S.FourthRightSection>
      </S.FourthWrapper>
      <S.FifthWrapper>
        <div>Watch everywhere.</div>
      </S.FifthWrapper>
      <S.SixthWrapper>
        <S.SixthLeftSection>
          <S.KidsImage src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" />
        </S.SixthLeftSection>
        <S.SixthRightSection>
          <S.SixthTitle>Create profiles for kids.</S.SixthTitle>
          <S.SixthContents>
            Send kids on adventures with their favorite <br /> characters in a
            space made just for them- <br /> free with your membership.
          </S.SixthContents>
        </S.SixthRightSection>
      </S.SixthWrapper>
      <S.SeventhWrapper>
        <S.SeventhTitle>
          {props.korean ? "자주 묻는 질문" : "Frequently Asked Questions"}
        </S.SeventhTitle>
        <S.NetflixWrapper onClick={props.onClickShowMore}>
          <S.Netflix>
            {props.korean ? "넷플릭스란 무엇인가요?" : "What is Netflix?"}
          </S.Netflix>
          {!props.isMore && <S.PlusSign>+</S.PlusSign>}
          {props.isMore && <S.XSign>X</S.XSign>}
        </S.NetflixWrapper>
        {props.isMore && (
          <div>
            <S.SeventhContents>
              <S.FirstContents>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There&apos;s
                always something new to discover and new TV shows and movies are
                added every week!
              </S.FirstContents>
            </S.SeventhContents>
          </div>
        )}
        <div>How much does Netflix cost?</div>
        <div>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          KRW9,500 to KRW17,000 a month. No extra costs, no contracts.
        </div>
        <div>Where can I watch?</div>
        <div>How do I cancel?</div>
        <div>What can I watch on Netflix?</div>
        <div>is Netflix good for kids?</div>
      </S.SeventhWrapper>
      <S.EighthWrapper>
        <div>Questions? Call 080-001-9588</div>
      </S.EighthWrapper>
    </>
  );
}
