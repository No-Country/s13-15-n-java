
import { Image } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/reducers/userReducer";
const Owner = () => {
  const userOff = useSelector(selectUser);

  return (
    <main className="h-screen w-full  p-2 bg-[#EDFBF2] sm:w-[80%] md:p-16 ml-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-base md:text-xl ">MI PERFIL</h1>
          <p className="text-[#67C477]">{userOff.rolId==1?"Propietario":""}</p>
        </div>

      <section className="flex flex-col gap-2  sm:flex-row sm:items-center sm:justify-between ">

        <article className="flex gap-4 items-center">
          <div className="rounded-full w-[100px] h-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXuPQxl6sg9rhXNDk9ZE5rHnYgj-V2u3O8g&usqp=CAU')] bg-no-repeat bg-cover "></div>
   
          <div className="md:ml-[30px]">
            <p className="text-xs">
            {userOff.nombre} {userOff.apellido}
            </p>
            <p className="text-xs">
              <div className="flex gap-2">
            <Image src="/ubication.svg" width={15} height={5} alt="img" />
            De  {userOff.ciudad.departamento.pais.nombre}

              </div>
            </p>
          </div>
          </article>

          <article className="bg-[#BBF7D1] mt-3 p-3 rounded-md min-w-[300px]">
            <p>Mi Propiedad:</p>
            <div className="flex justify-between">
            <Image src="/Frame.svg"  width={35} height={5} alt="img" />
              <div>
                <p>ciudad: {userOff.ciudad.departamento.nombre} </p>
                <p>Direccion: 1234 </p>

              </div>
            </div>
          </article>

          <button className="bg-[#0E0E0E] p-2 md:px-6 md:h-[40px] gap-3 flex items-center text-center justify-center rounded-md">
          <Image src="/pencilicon.svg"  width={35} height={5} alt="img" />
             <p className="text-white">
              Editar perfil 
              </p>
            </button>
          
      
      </section>
      <div className=" mx-auto  my-[20px]  w-[100%] h-[.5px] bg-black"></div>

    </main>
  );
};

export default Owner;
