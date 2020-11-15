export type SignInValues = {
    username: string;
    password: string;
}

export type SignInProps = {
    initialValues?: SignInValues;
    validateOnChange?: boolean;
    onSubmit?: (v: SignInValues) => Promise<void>
}

export type SignUpValues = {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm_password: string;
}

export type SignUpProps = {
    initialValues?: SignUpValues;
    validateOnChange?: boolean;
    onSubmit?: (v: SignUpValues) => Promise<void>
}

export type TForgotPasswordValues = {
    email?: string
}
