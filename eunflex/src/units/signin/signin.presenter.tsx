import * as S from "./signin.styles";
import RegisterFooterBlk from "../../commons/registerfooterblk/registerfooterblk.container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { PropsSignInUI } from "./signin.types";

export default function SignInUI(props: PropsSignInUI) {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#333",
    },
    input: {
      color: "#fff",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <S.Wrapper>
        <S.NetflixImage src="/netflix.png/" />
        <S.SignInWrapper>
          <S.SignIn>Sign In</S.SignIn>
          <S.InputWrapper>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "36ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                label="Email or phone number"
                variant="filled"
                className={classes.root}
                InputProps={{
                  className: classes.input,
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#808080" },
                }}
                style={{ borderRadius: "4px" }}
              />
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                className={classes.root}
                InputProps={{
                  className: classes.input,
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#808080" },
                }}
                style={{ borderRadius: "4px" }}
              />
            </Box>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SignInButton>Sign In</S.SignInButton>
          </S.ButtonWrapper>
          <S.CheckboxWrapper>
            <S.Checkbox type="checkbox" />
            <S.RememberMe>Remember me</S.RememberMe>
            <S.NeedHelpWrapper>
              <S.NeedHelp>Need help?</S.NeedHelp>
            </S.NeedHelpWrapper>
          </S.CheckboxWrapper>
          <S.FacebookWrapper>
            <S.FacebookImg src="facebook.png/" />
            <S.LoginFacebook>Login with Facebook</S.LoginFacebook>
          </S.FacebookWrapper>
          <S.NewToNetflix>
            New to Netflix?
            <S.SignUpNow onClick={props.onClickRegister}>
              Sign up now.
            </S.SignUpNow>
          </S.NewToNetflix>
          <S.ReCaptcha>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
            {!props.learnMore ? (
              <S.LearnMore onClick={props.onClickLearnMore}>
                Learn more.
              </S.LearnMore>
            ) : (
              <span></span>
            )}
          </S.ReCaptcha>
          {props.learnMore && (
            <S.Privacy>
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalized
              advertising by Google).
            </S.Privacy>
          )}
        </S.SignInWrapper>
      </S.Wrapper>
      <RegisterFooterBlk />
    </>
  );
}
