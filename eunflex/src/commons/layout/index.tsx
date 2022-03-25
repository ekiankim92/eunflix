import { ReactChild } from "react";
import styled from "@emotion/styled";
// import Header from "./header/header.container";
import Footer from "./footer/footer.container";
// import LandingPage from "../../../pages/landingpage";
import RegisterPage from "../../../pages/register";

interface LayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div``;

const BodyWrapper = styled.div``;

const Body = styled.div``;

export default function Layout(props: LayoutProps) {
  return (
    <Wrapper>
      {/* <Header /> */}
      <RegisterPage />
      {/* <LandingPage /> */}
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
