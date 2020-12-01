export type TAction = {
    type: string,
    [key: string]: any,
}

export type AuthState = {
    userData: UserData,
    pending: boolean,
}

export type UserData = {
    id?: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    type?: number | undefined,
    permissions?: Array<PermissionItem>
    avatar: string | number | null,
    file?: null | {
        filename: string | null,
    },
// eslint-disable-next-line @typescript-eslint/ban-types
} | {}

export type PermissionItem = {
    module: string,
    read: string,
    create: string,
    update: string,
    delete: string,
}

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

export type TForgotPasswordValues = Pick<SignUpValues, 'email'>

export type TResetPasswordValues = Pick<SignUpValues, 'password' | 'confirm_password'>
