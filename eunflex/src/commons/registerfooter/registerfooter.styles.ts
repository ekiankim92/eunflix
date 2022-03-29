import styled from "@emotion/styled";
import { Dropdown } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 370px;
  border-top: 1px solid #d3d3d3;
  background-color: #f3f3f3;
`;

export const Questions = styled.div`
  color: #757575;
  margin: 30px;
`;

export const OptionsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 16px 30px;
`;

export const FirstOptionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondOptionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FAQ = styled.div`
  color: #757575;
  font-size: 13px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HelpCenter = styled.div`
  color: #757575;
  font-size: 13px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Terms = styled.div`
  color: #757575;
  font-size: 13px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Privacy = styled.div`
  color: #757575;
  font-size: 13px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Cookie = styled.div`
  color: #757575;
  font-size: 13px;
  margin-top: 12px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Corporate = styled.div`
  color: #757575;
  font-size: 13px;
  margin-top: 12px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LanguageWrapper = styled.div`
  width: 128px;
  height: 48px;
  border: 1px solid #000;
  margin-left: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
`;

export const LanguageDropdown = styled(Dropdown)`
  color: #808080;
  font-size: 16px;
`;

export const WorldImage = styled.img`
  width: 18px;
  height: 18px;
`;

export const ArrowImage = styled.img`
  width: 12px;
  height: 12px;
`;

export const FooterOne = styled.div`
  color: #757575;
  margin: 16px 0px 0px 30px;
  font-size: 12px;
`;

export const AllFooters = styled.div`
  color: #757575;
  margin-left: 30px;
  font-size: 12px;
`;
