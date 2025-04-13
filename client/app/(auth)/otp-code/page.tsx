import FormInput from "@/components/ui/form-input";
import { OTPCode } from "@/constants/auth";
import Link from "next/link";

export default function Page() {
  return (
    <form className="register-form relative rounded-md shadow-md w-[420px] p-8 bg-white">
      <h1 className="title mt-3 text-center text-[24px] mb-2 font-bold text-slate-600">تأكيد رمز OTP</h1>
      <p className="text-center text-[15px] mb-6 text-slate-500">أدخل البيانات و اكمل رحلتك . سريع . سهل . آمن</p>
      { OTPCode.map((ele, index) => (
        <FormInput inp={ele} key={index} />
      )) }
      <Link href={"/otp-code"} className="mb-5 text-blue-500 text-[14px] hover:underline block">إعادة إرسال الرمز</Link>
      <input type="submit" value="تأكيد رمز OTP" className="form-submit w-full h-[50px] leading-[40px] hover:bg-blue-600 text-white bg-blue-500 font-bold rounded-md cursor-pointer transition-all" />
    </form>
  )
}