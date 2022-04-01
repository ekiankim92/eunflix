import * as S from "./register.styles";
import RegisterHeader from "../../commons/registerheader/registerheader.container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import RegisterFooter from "../../commons/registerfooter/registerfooter.container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./register.validations";

const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgb(255,255,255)",
  },
  root: {
    background: "#fff",
  },
}));

export default function RegisterUI(props) {
  const classes = useStyles();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickRegister)}>
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
          <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className={classes.root}
            InputProps={{ className: classes.input }}
            InputLabelProps={{
              style: { color: "#808080" },
            }}
            style={{ marginBottom: "30px" }}
            name="email"
            {...register("email")}
          />
          <S.ErrorMessage>{formState.errors.password?.message}</S.ErrorMessage>
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            className={classes.root}
            InputProps={{ className: classes.input }}
            InputLabelProps={{
              style: { color: "#808080" },
            }}
            style={{ marginBottom: "30px" }}
            name="password"
            {...register("password")}
          />
        </Box>
        <S.FirstCheckboxWrapper>
          <S.CheckboxWrapper>
            <S.CheckboxInput type="checkbox" required />
          </S.CheckboxWrapper>
          <S.CheckboxContents>
            Yes, I consent to collection and use of my personal information in
            accordance with the Privacy Statement
          </S.CheckboxContents>
        </S.FirstCheckboxWrapper>
        <FormGroup>
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
    </form>
  );
}
