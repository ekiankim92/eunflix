import * as S from "./signin.styles";
import RegisterFooterBlk from "../../commons/registerfooterblk/registerfooterblk.container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

export default function SignInUI() {
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
        </S.SignInWrapper>
      </S.Wrapper>
      <RegisterFooterBlk />
    </>
  );
}
