import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/header.container";

interface LayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div``;

const Body = styled.div``;

export default function Layout(props: LayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
