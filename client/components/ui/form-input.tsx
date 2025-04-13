"use client";

import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

type FormInput = {
  label: string;
  id: string;
  name: string;
  type: string;
  isPassword: boolean;
  isForget: boolean;
}

export default function FormInput({ inp } : { inp: FormInput }) {
  const [ isActive, setIsActive ] = useState(false);

  const [ isShow, setIsShow ] = useState(false);

  return (
    <>
      <div className={`form-group w-full relative ${inp.isForget ? "mb-1.5" : "mb-3"}`}>
        <label htmlFor={inp.id} className={`form-label transition-all text-slate-400 absolute ${isActive ? "text-[10px] top-1 right-1.5 font-bold" : "top-2/4 right-3 text-[14px] -translate-y-2/4"}`}>{inp.label}</label>
        <input onFocus={() => setIsActive(true)}  onBlur={(e) => e.currentTarget.value == '' && setIsActive(false)} type={ isShow ? "text" : inp.type } className={`form-input w-full py-3 pt-5 border-slate-400 px-3 ${ inp.isPassword && "pl-12" } outline-0 rounded-md border-solid border-[1px]`} name={inp.name} id={inp.id} />
        { inp.isPassword && (
          <button type="button" onClick={() => setIsShow(!isShow)} className="show-password cursor-pointer absolute top-2/4 -translate-y-2/4 left-3">
            { isShow ? <>
              <FaRegEyeSlash size={22} />
            </> : <>
              <FaRegEye size={22} />
            </> }
          </button>
        ) }
      </div>
      { inp.isForget && (
        <Link href={"/forgot-password"} className="mb-5 text-blue-500 hover:underline block text-[15px]">هل نسيت كلمة المرور ؟</Link>
      ) }
    </>
  )
}