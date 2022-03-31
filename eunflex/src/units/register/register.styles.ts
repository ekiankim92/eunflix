import styled from "@emotion/styled";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Wrapper = styled.div`
  margin: 60px auto;
  width: 500px;
`;

export const Title = styled.h1`
  width: 440px;
  height: 80px;
  color: #333;
`;

export const FirstSentence = styled.div`
  color: #333;
  font-size: 18px;
  margin-top: 12px;
`;

export const SecondSentence = styled.div`
  color: #333;
  font-size: 18px;
  margin: 12px 0px;
`;

export const FirstCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  width: 30px;
  height: 28px;
  border: 3px solid #615a5a;
  margin-left: 2px;
`;

export const CheckboxContents = styled.div`
  color: #333;
  margin-left: 20px;
`;

export const CheckboxInput = styled.input`
  width: 23px;
  height: 23px;
`;

export const SecondCheckbox = styled(FormControlLabel)`
  color: #333;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 500px;
  height: 64px;
  font-size: 24px;
  font-weight: 500;
  color: #eee;
  background-color: #e50914;
  border-radius: 4px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  color: #e50914;
  font-size: 10px;
`;
