import { AiOutlineArrowRight } from 'react-icons/ai';
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
            <div className="container grid grid-cols-12 gap-8 mt-10">
                <div className="col-span-3 bg-slate-200">left</div>
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
    );
}

export default Category;
