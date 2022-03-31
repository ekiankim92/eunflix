import styled from "@emotion/styled";
import { Dropdown } from "antd";

export const Wrapper = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 700px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),
    url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  border-bottom: 12px solid #414a4c;
`;

export const NetflixImage = styled.img`
  margin-left: 40px;
  padding: 8px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border: 1px solid #fff;
  border-radius: 2px;
`;

export const BreadcrumbWrapper = styled.div``;

export const Breadcrumb = styled(Dropdown)`
  color: #ffffff;
  padding: 6px;
`;

export const WorldImage = styled.img`
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 6px;
`;

export const SignButton = styled.button`
  width: 86px;
  height: 34px;
  margin: 30px;
  background-color: #e50914;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatchPhraseOne = styled.h1`
  color: #fff;
  font-size: 60px;
`;

export const CatchPhraseTwo = styled.h1`
  color: #fff;
  font-size: 60px;
  margin-top: -30px;
`;

export const CatchPhraseThree = styled.h2`
  color: #fff;
  padding: 4px;
`;

export const CatchPhraseFour = styled.h2`
  color: #fff;
  margin: 0px 0px 16px 0px;
`;

export const InputEmail = styled.input`
  width: 500px;
  height: 64px;
  padding: 10px;
  ::placeholder {
    opacity: 0.8;
  }
  border: none;
`;

export const ErrorMessage = styled.div`
  width: 692px;
  margin-top: 6px;
  color: #ffa00a;
`;

export const StartButton = styled.button`
  width: 210px;
  height: 62px;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  background-color: #e50914;
  border: none;
  cursor: pointer;
`;

export const ThirdWrapper = styled.div`
  display: flex;
  height: 400px;
  border-bottom: 12px solid #414a4c;
  background-color: #000;
`;

export const ThirdLeftSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThirdTitle = styled.h1`
  font-size: 38px;
  color: #fff;
`;

export const ThirdContents = styled.h2`
  font-size: 26px;
  color: #fff;
`;

export const ThirdRightSection = styled.section`
  width: 50%;
`;

export const TelevisionImage = styled.img`
  width: 50%;
  height: 52.5%;
  position: absolute;
`;

export const TelevisionVideo = styled.video`
  /* position: relative; */
  /* z-index: 1; */
  width: 99%;
  height: 76%;
`;

export const FourthWrapper = styled.div`
  display: flex;
  height: 400px;
  border-bottom: 12px solid #414a4c;
  background-color: #000;
`;

export const FourthLeftSection = styled.section`
  width: 50%;
`;

export const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StrangerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 382px;
  border: 1px solid #808080;
  border-radius: 0.75em;
  margin: 300px 0px 0px 164px;
  background-color: #000;
`;

export const InnerStrangerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 130px;
`;

export const StrangerImage = styled.img`
  width: 52px;
  height: 70px;
`;

export const StrangerThings = styled.div`
  color: #fff;
`;

export const Downloading = styled.div`
  color: #0071eb;
`;

export const DownloadImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const FourthRightSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FourthTitle = styled.h1`
  font-size: 38px;
  color: #fff;
`;

export const FourthContents = styled.h2`
  font-size: 26px;
  color: #fff;
`;

export const FifthWrapper = styled.div`
  /* display: flex; */
  height: 400px;
  border-bottom: 12px solid #414a4c;
  /* background-color: #000; */
  background-color: khaki;
`;

export const SixthWrapper = styled.div`
  display: flex;
  height: 400px;
  border-bottom: 12px solid #414a4c;
  background-color: #000;
`;

export const SixthLeftSection = styled.section`
  width: 50%;
`;

export const KidsImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const SixthRightSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SixthTitle = styled.h1`
  font-size: 38px;
  color: #fff;
`;

export const SixthContents = styled.h2`
  font-size: 26px;
  color: #fff;
`;

export const SeventhWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* height: 800px; */
  border-bottom: 12px solid #414a4c;
  /* background-color: #000; */
  background-color: aqua;
`;

export const SeventhTitle = styled.h1`
  font-size: 42px;
  color: #fff;
`;

export const NetflixWrapper = styled.div`
  display: flex;
  width: 812px;
  height: 72px;
  padding: 12px;
  margin-bottom: 6px;
  background-color: #303030;
  :hover {
    cursor: pointer;
  }
`;

export const Netflix = styled.div`
  width: 50%;
  color: #fff;
  font-size: 32px;
  margin-left: 26px;
`;

export const PlusSign = styled.div`
  width: 50%;
  color: #fff;
  font-size: 42px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
`;

export const XSign = styled.div`
  width: 50%;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
`;

export const SeventhContents = styled.div`
  width: 812px;
  height: 380px;
  margin-top: -4px;
  background-color: #303030;
`;

export const FirstContents = styled.div`
  color: #fff;
  font-size: 26px;
  padding: 26px 64px;
`;

export const NetflixCostWrapper = styled.div`
  display: flex;
  width: 812px;
  height: 72px;
  padding: 12px;
  margin: 6px auto;
  background-color: #303030;
  :hover {
    cursor: pointer;
  }
`;

export const NetflixCost = styled.div`
  width: 60%;
  color: #fff;
  font-size: 32px;
  margin-left: 26px;
`;

export const SeventhSecondContents = styled.div`
  width: 812px;
  height: 216px;
  margin-top: -4px;
  background-color: #303030;
`;

export const NetflixCostContents = styled.div`
  color: #fff;
  font-size: 26px;
  padding: 26px 64px;
`;

export const EighthWrapper = styled.div`
  display: flex;
  height: 400px;
  border-bottom: 12px solid #414a4c;
  /* background-color: #000; */
  background-color: darkseagreen;
`;
