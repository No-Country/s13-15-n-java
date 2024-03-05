'use client'
import { useSelector } from "react-redux";
import { selectUser } from "@/store/reducers/userReducer";
import Owner from "@/components/profile/Owner"
import Gardener from "@/components/profile/Gardener";
  
export default function Registro() {
  const user = useSelector(selectUser);
  console.log(user);
  if(!user) return <p>Cargando</p>
  if(user.rolId === 1){
    return (
      <Owner user={user}/>
    );
  }else if(user.rolId === 2){
    return(
      <Gardener />
    )
  }
}