export interface FormValues {
  email: string;
  password: string;
  name: string;
}

export interface PropsRegisterUI {
  onClickRegister: (data: FormValues) => void;
}
