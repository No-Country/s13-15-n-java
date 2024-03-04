'use client'
import LayoutJardinero from "@/components/profile/LayoutJardinero"
import LayoutPropietario from "@/components/profile/LayoutPropietario"
import { useEffect } from "react"
import { getUser } from "@/queries/usuario"
import { setUser,selectUser } from "@/store/reducers/userReducer"
import { useDispatch, useSelector } from "react-redux"

let didInit = false;
export default function DashboardLayout({ children}) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() =>{
    if (!didInit) {
      didInit = true;
      const {userToken} = JSON.parse(localStorage.getItem('user'))
      getUser(userToken).then(res => {
        dispatch(setUser(res.data));
      })
    }
  },[user])

  if(user){
    return <LayoutPropietario>{children}</LayoutPropietario>
  }else {
    return <LayoutJardinero>{children}</LayoutJardinero>
  }
}