'use client'
import LayoutJardinero from "@/components/profile/LayoutJardinero"
import LayoutPropietario from "@/components/profile/LayoutPropietario"
import { useEffect } from "react"
import { getUser } from "@/queries/usuario"
import { setUser,selectUser } from "@/store/reducers/userReducer"
import { useDispatch, useSelector } from "react-redux"
import { getOffers } from "@/queries/jardinero"
import { useRouter } from "next/navigation"
import { setOffers } from "@/store/reducers/gardenerReducer"
let didInit = false;
export default function DashboardLayout({ children}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter()
  useEffect(() =>{
    if (!didInit && localStorage.getItem('user')) {
      didInit = true;
      const {userToken} = JSON.parse(localStorage.getItem('user'))
      getUser(userToken).then(res => {
        dispatch(setUser(res.data));
      })
      getOffers("",userToken).then(res => {
        dispatch(setOffers(res.data));
      })
    }
  },[user])
  useEffect(() => {
    if(!user) router.push("/login")
  },[user])
  if(user.correo === "jarlinfonseca@gmail.com"){
    return <LayoutJardinero>{children}</LayoutJardinero>
  }else if(user.correo === "andres@gmail.com") {
    return <LayoutPropietario>{children}</LayoutPropietario>
  }
}