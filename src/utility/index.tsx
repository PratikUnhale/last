import * as Yup from 'yup'

export const loginSchema = Yup.object(
    {
        email: Yup.string().email().required("Please enter your username"),
        password: Yup.string().required("Please enter your password")
    }
)


export const forgotPasswordSchema = Yup.object(
    {
        email: Yup.string().email("Email in invalid").required("Please enter your email"),
    }
)

export const forgotPasswordLinkSchema = Yup.object(
    {
        password: Yup.string().required("Please enter your password"),
        confirm_password: Yup.string()
            .required()
            .oneOf([Yup.ref("password"), null], "Password must match"),
    }
)
export const resetPasswordSchema = Yup.object({
    current_password: Yup.string().required("Please enter your current password"),
    new_password: Yup.string().required("Please enter your new password"),
    confirm_new_password: Yup.string()
        .required()
        .oneOf([Yup.ref("new_password"), null], "Password must match"),

})
