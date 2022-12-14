import { Link } from 'react-router-dom';
import Image from '~/components/Image';
function Product({ name, image, price }) {
    return (
        <div className="group relative">
            <div
                className="absolute top-[326px] left-0 right-0 text-center z-50 h-10 
            transition-all opacity-0 invisible translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 duration-300"
            >
                <button className="text-lg bg-pink-400 text-white leading-10 cursor-pointer w-full">
                    Thêm vào giỏ hàng
                </button>
            </div>
            <Link to={'/'} className="overflow-hidden block relative max-h-[366px]">
                <Image
                    className="object-contain w-full hover:scale-125 transition-all min-h-[178px] max-h-[178px]"
                    src={image}
                    alt="Product"
                />
            </Link>
            <div className="text-center mt-4">
                <Link to={'/'} className="text-lg font-medium hover:text-red-600 transition-all">
                    {name}
                </Link>
                <div className="text-base space-x-4">
                    {/* <del className="text-[#888888]">$30.3</del> */}
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
