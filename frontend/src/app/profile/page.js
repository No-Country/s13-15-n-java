'use client'
import { useSelector } from "react-redux";
import { selectUser } from "@/store/reducers/userReducer";
import Owner from "@/components/profile/Owner"
import Gardener from "@/components/profile/Gardener";
  
export default function Registro() {
  const user = useSelector(selectUser);

  if(user.rolId === 1){
    return (
      <Owner />
    );
  }else if(user.rolId === 1){
    return(
      <Gardener />
    )
  }
}