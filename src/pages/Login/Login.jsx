import Image from '~/components/Image';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="col-span-6 bg-[#f2c98a] flex items-center">
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <Image src={images.logo} />
                        <Image className="w-4/5" src={images.shopping} />
                    </div>
                </div>
            </div>
            <div className="col-span-6 flex items-center">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="text-center w-4/5 space-y-4">
                            <h5 className="text-2xl font-bold">Đăng Nhập</h5>
                            <p className="text-lg font-medium">
                                Bạn chưa có tài khoản?{' '}
                                <Link className="text-[#009ef7]" to={'/register'}>
                                    Đăng ký miễn phí ngay!
                                </Link>
                            </p>
                            <input type="text" className="input input-form" placeholder="Email" />
                            <p className="text-right text-[#e91a1a] text-base !-mb-2 cursor-pointer">Quên mật khẩu</p>
                            <input type="password" className="input input-form" placeholder="Mật khẩu" />

                            <button className="w-full input input-form !bg-[#009ef7] text-white">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
