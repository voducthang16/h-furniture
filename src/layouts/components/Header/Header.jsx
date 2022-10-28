import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import './Header.scss';
import image from '~/assets/images';
import Image from '~/components/Image';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import axios from 'axios';
function Header() {
    const navigate = useNavigate();
    const handleShowNavbar = () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('hidden');
    };
    const handleShowSubCategory = () => {
        const subCategory = document.querySelector('.sub-category');
        subCategory.classList.toggle('hidden');
    };
    const handleShowSearch = () => {
        const searchBar = document.querySelector('.search-bar');
        searchBar.classList.toggle('hidden');
        searchBar.classList.toggle('active');
    };
    const [category, setCategory] = useState();
    const getCategories = () => {
        axios
            .get('http://localhost/be-f-furniture/public/api/category')
            .then((res) => {
                setCategory(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getCategories();
    }, []);
    const search = (e) => {
        e.preventDefault();
        const keyword = document.querySelector('#search-keyword').value;
        navigate(`/category/search/${keyword}`);
    };
    return (
        <header className="header-wrapper">
            <div className="header bg-white border-b border-slate-200 relative">
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
                                    <Link className="text-base" to={'/'}>
                                        Trang chủ
                                    </Link>
                                </li>
                                <li className="group py-2 px-3 flex items-center relative">
                                    <Link className="text-base" to={'/category'}>
                                        Danh mục
                                    </Link>
                                    <div className="group-hover:block hidden absolute z-40 top-full left-0 w-40 shadow-md bg-white">
                                        <ul className="px-3 py-4 text-base">
                                            {category?.map((item, index) => (
                                                <li key={index} className="hover:opacity-80">
                                                    <Link to={`/category/${item.id}`}>{item.ten_loai}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-2 px-3 flex items-center">
                                    <Link className="text-base" to={'/'}>
                                        Giới thiệu
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-start-8 col-span-5 lg:col-span-3 flex items-center">
                            <div className="flex justify-end items-center space-x-2 lg:space-x-4 flex-1">
                                <div>
                                    <AiOutlineSearch onClick={handleShowSearch} className="text-2xl cursor-pointer" />
                                </div>
                                <div className="w-px h-8 bg-slate-300"></div>
                                <div>
                                    <AiOutlineUser className="text-2xl cursor-pointer" />
                                </div>
                                <div className="w-px h-8 bg-slate-300"></div>
                                <div>
                                    <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
                                </div>
                                <div>
                                    <GoThreeBars onClick={handleShowNavbar} className="text-2xl lg:hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden search-bar w-full top-full pb-5">
                        <form onSubmit={search}>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="search-keyword"
                                    className="block p-4 pl-10 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Tìm kiếm sản phẩm ..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden navbar absolute top-full left-0 right-0 bg-white shadow lg:hidden">
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
