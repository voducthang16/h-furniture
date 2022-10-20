import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import './Category.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '~/layouts/components/Product';
function Category() {
    const { categoryId } = useParams();
    const [category, setCategory] = useState();
    const [categoryName, setCategoryName] = useState();
    const [products, setProducts] = useState();
    const [totalProduct, setTotalProduct] = useState();
    const productPerPage = 3;
    const paginationQuantity = Math.ceil(totalProduct / productPerPage);
    const [paginationArr, setPaginationArr] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const arr = [];
        if (totalProduct) {
            for (let i = 1; i <= paginationQuantity; i++) {
                arr.push(i);
            }
            setPaginationArr(arr);
        }
    }, []);
    const getCategories = () => {
        axios
            .get('http://localhost/be-f-furniture/public/api/category')
            .then((res) => {
                setCategory(res.data);
                setTotalProduct(res.data.length);
                const newArray = res.data.filter((item) => {
                    return item.id == +categoryId;
                });
                setCategoryName(newArray[0]);
            })
            .catch((err) => console.log(err));
    };
    const getProducts = (categoryId, currentPage = 1) => {
        axios
            .get(`http://localhost/be-f-furniture/public/api/product?loai=${categoryId}&page=${currentPage}`)
            .then((res) => setProducts(res.data.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getCategories();
    }, [categoryId]);
    useEffect(() => {
        getProducts(categoryId);
    }, [categoryId]);
    return (
        <div className="mb-20">
            {/* breadcrumb */}
            <div className="h-56 bg">
                <div className="container h-56">
                    <div className="flex h-56 justify-center items-center">
                        <div className="flex text-base items-center space-x-2">
                            <Link to={'/'}>Trang chủ</Link>
                            <AiOutlineArrowRight />
                            <Link to={'/category'}>Danh mục</Link>
                            {categoryId ? <AiOutlineArrowRight /> : <></>}
                            <Link to={`/category/${categoryName?.id}`}>{categoryName?.ten_loai}</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* category */}
            <div className="container">
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="col-span-3 ">
                        <h5 className="text-xl font-semibold pb-4 mb-4 border-b border-slate-300/80">Danh mục</h5>
                        <ul className="text-base space-y-4">
                            {category?.map((item, index) => (
                                <li key={index} className="hover:opacity-60 transition-all">
                                    <Link to={`/category/${item.id}`}>{item.ten_loai}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-9">
                        <div className="grid grid-cols-3 gap-8">
                            {products?.map((item, index) => (
                                <div key={index} className="col-span-1">
                                    <Product name={item.ten_san_pham} image={item.hinh} price={item.don_gia} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* pagination */}
            <div className="container mt-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-9 col-start-4 flex justify-center items-center space-x-4">
                        <div className="pagination-button">
                            <AiOutlineArrowLeft />
                        </div>
                        <ul className="flex space-x-2">
                            {paginationArr?.map((index) => (
                                <li
                                    key={index}
                                    className={`pagination-button ${index === currentPage ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentPage(index);
                                        getProducts(categoryId, index);
                                    }}
                                >
                                    {index}
                                </li>
                            ))}
                        </ul>
                        <div className="pagination-button">
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
