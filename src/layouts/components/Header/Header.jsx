import styles from './Header.module.scss';
import image from '~/assets/images';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header-wrapper">
            <div className="header bg-white border-b border-slate-200 shadow max-h-20">
                <div className="container">
                    <div className="grid grid-cols-12 h-20 lg:gap-5">
                        <div className="lg:col-span-2 flex items-center jus">
                            <Link to={'/'}>
                                <Image className="object-contain w-full" src={image.logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="lg:col-span-7">navbar</div>
                        <div className="lg:col-span-3">user</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
