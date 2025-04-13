import FormInput from "@/components/ui/form-input";
import { ForgotPassword } from "@/constants/auth";
import Link from "next/link";

export default function Page() {
  return (
    <form className="register-form relative rounded-md shadow-md w-[420px] p-8 bg-white">
      <Link href={"/login"} className="absolute top-4.5 right-4 text-blue-500 hover:underline">تسجيل الدخول ؟</Link>
      <h1 className="title mt-3 text-center text-[24px] mb-2 font-bold text-slate-600">إعادة تعيين كلمة المرور</h1>
      <p className="text-center text-[15px] mb-6 text-slate-500">أدخل البيانات و اكمل رحلتك . سريع . سهل . آمن</p>
      { ForgotPassword.map((ele, index) => (
        <FormInput inp={ele} key={index} />
      )) }
      <input type="submit" value="إرسال رمز OTP" className="form-submit w-full h-[50px] leading-[40px] hover:bg-blue-600 text-white bg-blue-500 font-bold rounded-md cursor-pointer transition-all" />
    </form>
  )
}