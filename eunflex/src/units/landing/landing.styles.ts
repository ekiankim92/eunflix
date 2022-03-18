import styled from "@emotion/styled";
import { Dropdown } from "antd";

export const Wrapper = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 700px;
  background-image: url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  border-bottom: 10px solid #222222;
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
  border: 1px solid #eee;
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
  background-color: #eee;
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
  color: #eee;
  font-size: 60px;
`;

export const CatchPhraseTwo = styled.h1`
  color: #eee;
  font-size: 60px;
  margin-top: -30px;
`;

export const CatchPhraseThree = styled.h2`
  color: #eee;
  padding: 4px;
`;

export const CatchPhraseFour = styled.h2`
  color: #eee;
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

export const StartButton = styled.button`
  width: 210px;
  height: 62px;
  color: #eee;
  font-weight: 400;
  font-size: 18px;
  background-color: #e50914;
  border: none;
  cursor: pointer;
`;
