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
`;

export const NetflixImage = styled.img`
  margin-left: 40px;
  padding: 8px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const testing = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Language = styled.span`
  border: 2px solid black;
  background-color: lightcoral;
`;

export const Breadcrumb = styled(Dropdown)`
  width: 120px;
  color: #ffffff;
`;

export const WorldImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const SignButton = styled.button`
  width: 86px;
  height: 34px;
  margin: 40px;
  background-color: #e50914;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
