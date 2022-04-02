import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import RegisterUI from "./register.presenter";
import { CREATE_USER } from "./register.queries";
import { FormValues } from "./register.types";

export default function Register() {
  const [createUser] = useMutation(CREATE_USER);

  const onClickRegister = async (data: FormValues) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: "J.Fla",
          },
        },
      });
      Modal.success({ content: "Successfully Submitted" });
      console.log(result);
    } catch (error) {
      console.log("RegisterError:", error.message);
    }
  };

  return <RegisterUI onClickRegister={onClickRegister} />;
}
