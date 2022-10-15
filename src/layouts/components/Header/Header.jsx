import { useEffect } from 'react';
import styles from './Header.module.scss';
import image from '~/assets/images';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
function Header() {
    const handleShowNavbar = () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('hidden');
    };
    const handleShowSubCategory = () => {
        const subCategory = document.querySelector('.sub-category');
        subCategory.classList.toggle('hidden');
    };
    return (
        <header className="header-wrapper">
            <div className="header bg-white border-b border-slate-200 max-h-20 relative">
                <div className="container">
                    <div className="grid grid-cols-12 h-20 lg:gap-5">
                        <div className="col-span-2 flex items-center">
                            <Link to={'/'}>
                                <Image className="object-contain w-full" src={image.logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="hidden lg:col-span-7 lg:flex items-center justify-center">
                            <ul className="flex justify-between h-20 space-x-2 px-20">
                                <li className="py-2 px-3 flex items-center">
                                    <Link className="text-lg" to={'/'}>
                                        Trang chủ
                                    </Link>
                                </li>
                                <li className="group py-2 px-3 flex items-center relative">
                                    <Link className="text-lg" to={'/'}>
                                        Danh mục
                                    </Link>
                                    <div className="group-hover:block hidden absolute z-40 top-full left-0 w-40 shadow-md">
                                        <ul className="px-3 py-4 text-base">
                                            <li>
                                                <Link to={'/'}>Sub Menu 1</Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}>Sub Menu 2</Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}>Sub Menu 3</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-2 px-3 flex items-center">
                                    <Link className="text-lg" to={'/'}>
                                        Giới thiệu
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-start-8 col-span-5 lg:col-span-3 flex items-center">
                            <div className="flex justify-end items-center space-x-2 lg:space-x-4 flex-1">
                                <div>
                                    <AiOutlineSearch className="text-2xl" />
                                </div>
                                <div className="w-px h-8 bg-slate-300"></div>
                                <div>
                                    <AiOutlineUser className="text-2xl" />
                                </div>
                                <div className="w-px h-8 bg-slate-300"></div>
                                <div>
                                    <AiOutlineShoppingCart className="text-2xl" />
                                </div>
                                <div>
                                    <GoThreeBars onClick={handleShowNavbar} className="text-2xl lg:hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden navbar absolute top-full left-0 right-0 bg-white shadow">
                    <ul className="text-base p-4 md:mx-[26px] space-y-4">
                        <li>
                            <Link to={'/'}>Trang chủ</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Giới thiệu</Link>
                        </li>
                        <li onClick={handleShowSubCategory} className="flex items-center">
                            Danh mục <AiOutlineArrowDown className="text-base ml-2" />
                        </li>
                        <li className="sub-category hidden">
                            <ul className="text-sm space-y-2 px-4">
                                <li>
                                    <Link className="" to={'/'}>
                                        Tất cả
                                    </Link>
                                </li>
                                <li>
                                    <Link className="" to={'/'}>
                                        Sub Menu 1
                                    </Link>
                                </li>
                                <li>
                                    <Link className="" to={'/'}>
                                        Sub Menu 2
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={'/'}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
