'use client'
import { useSelector } from "react-redux";
import { userInfo } from "@/store/reducers/userReducer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from '../../queries/usuario'
import Owner from "@/components/profile/Owner"
import Gardener from "@/components/profile/Gardener";


export default function Registro() {

  // useEffect(() => {
  //   console.log(getUser(3).then(res => console.log(res.data)))
  // }, []);
  // const user = useSelector(userInfo)
  // const router = useRouter()
  // useEffect(() => {
  //   /*if (!user.email) {
  //     router.push("/")
  //   }*/
  // })

  const [initialUser, setInitialUser] = useState();
  console.log(initialUser);
  useEffect(() => {
    setInitialUser(JSON.parse(localStorage.getItem('user')))
  }, []);

  if(initialUser?.correo !== "jardinero@gmail.com"){
    return (
      <Owner />
    );
  }else {
    return(
      <Gardener />
    )
  }
}