"use client";

import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

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

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [ isHovered, setIsHovered ] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setImageUrl(blobUrl);
    }
  };

  return (
    <>
      <div className={`form-group w-full relative ${inp.isForget ? "mb-1.5" : "mb-3"}`}>
        { inp.type === "file" ? <>
          <label onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} htmlFor={inp.id} className="form-label w-[150px] h-[150px] relative rounded-full bg-slate-200 mx-auto flex items-center justify-center overflow-hidden">
            { isHovered && (
              <div className="camera cursor-pointer z-20 bg-[#cad5e29a] text-slate-500 w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <FiCamera size={20} />
              </div>
            ) }
            { imageUrl && (
              <Image src={imageUrl} alt="profile image" width={150} height={150} className="w-full h-full object-cover" />
            ) }
          </label>
          <input type="file" required hidden accept="image/*" onChange={handleImageChange} id={inp.id} name={inp.name} />
        </> : <>
          <label htmlFor={inp.id} className={`form-label transition-all text-slate-400 absolute ${isActive ? "text-[10px] top-1 right-1.5 font-bold" : "top-2/4 right-3 text-[14px] -translate-y-2/4"}`}>{inp.label}</label>
          <input onFocus={() => setIsActive(true)}  onBlur={(e) => e.currentTarget.value == '' && setIsActive(false)} type={ isShow ? "text" : inp.type } className={`form-input w-full py-3 pt-5 border-slate-400 px-3 ${ inp.isPassword && "pl-12" } outline-0 rounded-md border-solid border-[1px]`} name={inp.name} id={inp.id} required />
          { inp.isPassword && (
            <button type="button" onClick={() => setIsShow(!isShow)} className="show-password cursor-pointer absolute top-2/4 -translate-y-2/4 left-3">
              { isShow ? <>
                <FaRegEyeSlash size={22} />
              </> : <>
                <FaRegEye size={22} />
              </> }
            </button>
          ) }
        </> }
      </div>
      { inp.isForget && (
        <Link href={"/forgot-password"} className="mb-5 text-blue-500 hover:underline block text-[15px]">هل نسيت كلمة المرور ؟</Link>
      ) }
    </>
  )
}