import { Link } from 'react-router-dom';
import Image from '~/components/Image';
function Product() {
    return (
        <div className="group">
            <Link to={'/'} className="overflow-hidden block">
                <Image
                    className="object-contain w-full hover:scale-125 transition-all"
                    src={'https://demo.hasthemes.com/asbab-preview/asbab/images/product/1.jpg'}
                    alt="Product"
                />
            </Link>
            <div className="text-center mt-4">
                <Link to={'/'} className="text-lg font-medium hover:text-red-600 transition-all">
                    Largest Water Pot
                </Link>
                <div className="text-base space-x-4">
                    <del className="text-[#888888]">$30.3</del>
                    <span>$25.9</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
