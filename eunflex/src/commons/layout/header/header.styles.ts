import styled from "@emotion/styled";
import { Dropdown } from "antd";

export const Wrapper = styled.div`
  margin: 0px auto;
  background-color: khaki;
`;

export const Language = styled.span`
  border: 2px solid black;
  background-color: lightcoral;
`;

export const Breadcrumb = styled(Dropdown)`
  width: 120px;
  height: 120px;
  /* background-color: lightblue; */
  color: #ffffff;
`;

export const WorldImage = styled.img`
  width: 32px;
  height: 32px;
`;
