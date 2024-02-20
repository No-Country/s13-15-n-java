'use client'
import { useSelector } from "react-redux";
import { userInfo } from "@/store/reducers/userReducer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Registro() {
  const user = useSelector(userInfo)
  const router = useRouter()
  useEffect(() => {
    /*if (!user.email) {
      router.push("/")
    }*/
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>{user.email}</h1>

    </main>
  );
}