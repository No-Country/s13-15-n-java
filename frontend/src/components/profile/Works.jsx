import React from 'react'
import { Button, Image} from '@nextui-org/react';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export const Works = () => {
    return (
        <div className="flex md:flex-row xl:flex-row flex-col justify-around xs:my-4">
            <Image className="mr-4 rounded-full size-16" src={"https://i.pravatar.cc/150?u=a04258114e29026702d"} />
            <div>
                <div className='font-bold text-md md:text-lg xl:text-xl xs:my-4'>Jose Collao</div>
                <div className="text-lg xs:my-4">Rosario de Talas, entre Rios</div>
            </div>
            <div className="flex mx-4 xs:my-4">
                <IoIosStar className="size-8 text-green"/>
                <IoIosStar className="size-8 text-green"/>
                <IoIosStar className="size-8 text-green"/>
                <IoIosStar className="size-8 text-green"/>
                <IoIosStarOutline className="size-8 text-green"/>
            </div>
            <Button color="success" variant="bordered" className="text-black " radius="sm">
            Editar Perfil
          </Button>
        </div>
    )
}
