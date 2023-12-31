import { logo, car, menu, close } from '../assets'
import { useState } from 'react';
import { navLinks, button } from '../constants';
import Button from './Button';
import ButtonM from './ButtonM';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='flex items-center w-full justify-between bg-black'>
            <div className='p-4'>
                <img src={logo}
                    alt='logo'
                    width={60}
                    height={60}

                />

            </div>
            <ul className='sm:flex justify-center flex-1 list-none hidden items-center'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`text-white flex
                text-[16px] cursor-pointer
                font-varela
                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}

            </ul>
            <Button />
            <div className='sm:hidden cursor-pointer
            px-4'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    onClick={() => setToggle((prev) => (!prev))}
                    className='w-[28px] h-[28px]
                    object-contain'
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'}
                    flex bg-primary absolute top-20 right-0 
                    mx-2 my-2 min-w-[140px] py-4
                    rounded-b-xl justify-end items-center`}
                >
                    <ul className='justify-center flex-col list-none items-center'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`text-white flex
                                text-[16px] cursor-pointer mb-2
                                font-varela
                                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                                `}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        <ButtonM/>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}


export default Navbar