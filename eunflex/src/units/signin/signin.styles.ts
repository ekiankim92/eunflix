import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/fd1adf83-1d19-4128-8042-0c0143b8db02/KR-en-20220321-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NetflixImage = styled.img`
  width: 180px;
  margin: -40px 0px 0px 40px;
`;

export const SignInWrapper = styled.div`
  width: 450px;
  height: 660px;
  background-color: #000;
  margin: 0px auto;
  border-radius: 4px;
`;

export const SignIn = styled.h1`
  color: #fff;
  font-size: 32px;
  padding: 40px 0px 0px 64px;
`;

export const InputWrapper = styled.div`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`;

export const CheckboxWrapper = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  padding: 18px;
  margin-left: 50px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

export const RememberMe = styled.span`
  color: #808080;
`;

export const NeedHelpWrapper = styled.div`
  width: 200px;
  text-align: right;
`;

export const NeedHelp = styled.span`
  color: #808080;
`;

export const SignInButton = styled.button`
  width: 314px;
  height: 48px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  color: #fff;
  background-color: #e50914;
  :hover {
    cursor: pointer;
  }
`;

export const FacebookWrapper = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  padding: 18px;
  margin: 10px 0px 0px 50px;
`;

export const FacebookImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 4px;
`;

export const LoginFacebook = styled.span`
  color: #808080;
`;

export const NewToNetflix = styled.div`
  width: 260px;
  color: #808080;
  font-size: 16px;
  margin-left: 70px;
`;

export const SignUpNow = styled.span`
  color: #fff;
  margin-left: 4px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ReCaptcha = styled.div`
  width: 300px;
  color: #808080;
  font-size: 12px;
  margin: 10px 0px 0px 70px;
`;

export const LearnMore = styled.span`
  color: #0000ff;
  margin-left: 4px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Privacy = styled.div`
  color: #808080;
  font-size: 12px;
  width: 300px;
  margin: 10px 0px 0px 70px;
`;
