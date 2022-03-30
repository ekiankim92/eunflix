import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import RegisterUI from "./register.presenter";
import { CREATE_USER } from "./register.queries";
import { FormValues } from "./register.types";

export default function Register() {
  const [createUser] = useMutation(CREATE_USER);

  // const [checked, setChecked] = useState(true);
  const [checkedButtons, setCheckedButtons] = useState([]);

  // const handleChange = () => {
  //   setChecked(!checked);
  //   console.log("check");
  // };

  // const handleChange = (checked, id) => {
  //   if (checked) {
  //     setCheckedButtons([...checkedButtons, id]);
  //     console.log("checked");
  //   } else {
  //     setCheckedButtons(checkedButtons.filter((button) => button !== id));
  //     console.log("unchecked");
  //   }
  // };

  const onClickRegister = async (data: FormValues, checked, id) => {
    if (checked) {
      setCheckedButtons([...checkedButtons, id]);
      console.log("checked");
    } else {
      setCheckedButtons(checkedButtons.filter((button) => button !== id));
      console.log("unchecked");
    }

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
