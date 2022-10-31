import Image from '~/components/Image';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
function AdminLayout({ children }) {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 bg-[#f5f8fa] min-h-screen">
                    <div className="flex items-center justify-center py-4 border-b border-slate-200 max-h-[80px]">
                        <Link to={'/'}>
                            <Image src={images.logo} />
                        </Link>
                    </div>
                    <div className="py-4">
                        <ul className="px-4 text-lg font-medium hover:opacity-60 transition-all cursor-pointer">
                            <li>
                                <Link to={'/admin/category'}>Loại sản phẩm</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-9">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
