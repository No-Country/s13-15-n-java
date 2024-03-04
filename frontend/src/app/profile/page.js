'use client'
import { useRouter } from "next/navigation";
import { Image, Button } from "@nextui-org/react";
import { LuTrees } from "react-icons/lu";
import { Works } from "@/components/profile/Works";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/reducers/userReducer";

export default function Home() {

  const router = useRouter()
  const user = useSelector(selectUser);
  const fullName = user?.nombre +" " + user?.apellido
  if(!user) router.push("/")
  return (
    <main className=" h-screen flex-col items-center w-4/5 xs:ml-10 md:ml-20 xl:ml-28">
      <div className="flex flex-col justify-around h-1/2 w-full border-b-2 border-y-lime-950 ">
        <div className="flex items-center">
          <p className="font-bold mr-10 text-md md:text-2xl xl:text-2xl ">MI PERFIL</p>
          <p className="text-green ">Propietario</p>
        </div>
        <div className="flex w-full items-center">
          <Image className="mr-10 rounded-full size-14 md:size-24 xl:size-24" src={"https://avatars.githubusercontent.com/u/30373425?v=4"} />
          <div className="font-bold text:lg md:text-xl xl:text-2xl">{fullName}</div>
          <Button  className="text-white md:last:ml-[30%] xl:last:ml-[50%] bg-green " radius="sm">
            Editar Perfil
          </Button>
        </div>
        <div className="flex items-center">
          <div className="mr-20">Mi Propiedad</div>
          <button className="text-green cursor-pointer" variant="light" >+Agregar Propiedad</button>
        </div>
        <div className="w-80 h-24 bg-green2 flex items-center">
          <LuTrees className="size-16 mx-4 text-green" />
          <div>
            <p className="text-green font-bold text-lg">Basavilbaso</p>
            <p className="text-green font-bold text-lg">1234 N. Aguet St</p>
          </div>
        </div>
      </div>    
      <div className="flex flex-col max-h-max justify-around md:h-1/2 xl:h-1/2 ">
        <div className="font-bold">Trabajos Finalizados</div>
        <div className="h-1/4 md:h-3/4 xl:h-3/4 flex flex-col justify-around">
          <Works />
          <Works />
          <Works />
        </div>
      </div>
    </main>
  );
}