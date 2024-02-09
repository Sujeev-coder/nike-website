import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const nav = () => {

    const [toggle, settoggle] = useState(true)

    const menuFunction = () => {
        settoggle(!toggle)


    }

    return (
        <div>
           
            <div className='bg-white h-16 flex items-center justify-around'>
                <div>
                    <img height={20} width={60} className='mt-3' src='data:image/png;base64,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' />

                </div>

                <div className='flex gap-2 font-bold max-sm:hidden '>

                    <h1>Menu</h1>
                    <h1>Shop</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                </div>

                <div>

                    <button className='bg-red-500 p-1 rounded-lg max-sm:hidden'>Login</button>
                    <button className='md:hidden' onClick={menuFunction}>{toggle ? <CiMenuFries className='text-4xl mt-3' /> : <IoClose className='text-4xl mt-3' />}</button>

                </div>

            </div>
            {
                toggle ? null : <div className='grid bg-white justify-items-center overflow:hidden absolute w-full font-bold'>

                    <h1>Menu</h1>
                    <h1>Shop</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>

                </div>

            }

        </div>
    )
}

export default nav

