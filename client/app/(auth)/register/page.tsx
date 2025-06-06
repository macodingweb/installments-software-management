import FormInput from "@/components/ui/form-input";
import { RegisterInpts } from "@/constants/auth";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  return (
    <form className="register-form relative rounded-md shadow-md w-[420px] p-8 bg-white">
      <Link href={"/login"} className="absolute top-4.5 right-4 text-blue-500 hover:underline">تسجيل الدخول ؟</Link>
      <h1 className="title mt-3 text-center text-[24px] mb-2 font-bold text-slate-600">إنشاء حساب جديد</h1>
      <p className="text-center text-[15px] mb-6 text-slate-500">أدخل البيانات و ابدأ رحلتك . سريع . سهل . آمن</p>
      { RegisterInpts.map((ele, index) => (
        <FormInput inp={ele} key={index} />
      )) }
      <input type="submit" value="إنشاء حساب" className="form-submit w-full h-[50px] leading-[40px] hover:bg-blue-600 text-white bg-blue-500 font-bold rounded-md cursor-pointer transition-all" />
      <span className="block text-center my-4 text-slate-600 font-bold">أو</span>
      <div className="sign-in-with-google transition-all hover:bg-slate-100 border justify-center rounded-md border-slate-300 cursor-pointer flex items-center gap-4 py-3.5 px-6">
        <span>إنشاء حساب بواسطة</span>
        <FcGoogle size={28} />
      </div>
    </form>
  )
}