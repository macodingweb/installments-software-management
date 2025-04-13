export const RegisterInpts = [
  {
    label: "الاسم بالكامل",
    id: "name",
    name: "name",
    type: "text",
    isPassword: false,
    isForget: false,
  },
  {
    label: "البريد الإلكتروني",
    id: "email",
    name: "email",
    type: "email",
    isPassword: false,
    isForget: false,
  },
  {
    label: "كلمة المرور",
    id: "password",
    name: "password",
    type: "password",
    isPassword: true,
    isForget: false,
  },
  {
    label: "تأكيد كلمة المرور",
    id: "Cpassword",
    name: "Cpassword",
    type: "password",
    isPassword: true,
    isForget: false,
  },
]

export const LoginInpts = [
  {
    label: "البريد الإلكتروني",
    id: "email",
    name: "email",
    type: "email",
    isPassword: false,
    isForget: false,
  },
  {
    label: "كلمة المرور",
    id: "password",
    name: "password",
    type: "password",
    isPassword: true,
    isForget: true,
  },
]

export const ForgotPassword = [
  {
    label: "البريد الإلكتروني",
    id: "email",
    name: "email",
    type: "email",
    isPassword: false,
    isForget: false,
  },
]

export const OTPCode = [
  {
    label: "رمز الـ OTP",
    id: "otp-code",
    name: "otp-code",
    type: "text",
    isPassword: false,
    isForget: false,
  },
]