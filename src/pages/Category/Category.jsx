import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import './Category.scss';
import Product from '~/layouts/components/Product';
function Category() {
    const { id } = useParams();
    return (
        <div className="mb-20">
            {/* banner */}
            <div className="h-56 bg">
                <div className="container h-56">
                    <div className="flex h-56 justify-center items-center">
                        <div className="flex text-base items-center space-x-2">
                            <Link to={'/'}>Trang chủ</Link>
                            <AiOutlineArrowRight />
                            <Link to={'/'}>Danh mục</Link>
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
                            <li>
                                <Link className="hover:opacity-60 transition-all" to={'/category/1'}>
                                    Danh muc 1
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:opacity-60 transition-all" to={'/category/2'}>
                                    Danh muc 2
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:opacity-60 transition-all" to={'/category/3'}>
                                    Danh muc 3
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-9">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-1">
                                <Product />
                            </div>
                            <div className="col-span-1">
                                <Product />
                            </div>
                            <div className="col-span-1">
                                <Product />
                            </div>
                            <div className="col-span-1">
                                <Product />
                            </div>
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
                            <li className="pagination-button active">1</li>
                            <li className="pagination-button">2</li>
                            <li className="pagination-button">3</li>
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
