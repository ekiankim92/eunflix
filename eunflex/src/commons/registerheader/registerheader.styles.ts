import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgray;
`;

export const NetflixImage = styled.img`
  width: 220px;
  margin-left: 40px;
  :hover {
    cursor: pointer;
  }
`;

export const SignIn = styled.div`
  width: 76%;
  font-size: 22px;
  display: flex;
  justify-content: flex-end;
  color: #333;
  font-weight: 700;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
