import * as S from "./register.styles";
import RegisterHeader from "../../commons/registerheader/registerheader.container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import RegisterFooter from "../../commons/registerfooter/registerfooter.container";

const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgb(255,255,255)",
  },
  root: {
    background: "white",
  },
}));

export default function RegisterUI() {
  const classes = useStyles();

  return (
    <>
      <RegisterHeader />
      <S.Wrapper>
        <S.Title>Create a password to start your membership</S.Title>
        <S.FirstSentence>
          Just a few more steps and you&apos;re done!
        </S.FirstSentence>
        <S.SecondSentence>We hate paperwork, too.</S.SecondSentence>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 0,
              width: "49.4ch",
              border: "1px solid #000",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className={classes.root}
            InputProps={{ className: classes.input }}
            style={{ marginBottom: "30px" }}
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            className={classes.root}
            InputProps={{ className: classes.input }}
            style={{ marginBottom: "30px" }}
          />
        </Box>
        <FormGroup>
          <S.FirstCheckbox
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
            label="Yes, I consent to collection and use of my personal information in
            accordance with the Privacy Statement"
          />
          <S.SecondCheckbox
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
            label="Yes, please email me Netflix special offers.(optional)"
          />
        </FormGroup>
        <S.ButtonWrapper>
          <S.Button>Agree and Next</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
      <RegisterFooter />
    </>
  );
}
