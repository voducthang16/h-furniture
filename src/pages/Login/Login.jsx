import Image from '~/components/Image';
import images from '~/assets/images';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function Register() {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        axios
            .post('http://localhost/be-f-furniture/public/api/auth/login', {
                email: email,
                password: password,
            })
            .then(function (response) {
                setCookie('login', true, 7);
                setCookie('access_token', response.data.access_token, 7);
                navigate('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    };
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
                        <form className="text-center w-4/5 space-y-4" onSubmit={handleLogin}>
                            <h5 className="text-2xl font-bold">Đăng Nhập</h5>
                            <p className="text-lg font-medium">
                                Bạn chưa có tài khoản?{' '}
                                <Link className="text-[#009ef7]" to={'/register'}>
                                    Đăng ký miễn phí ngay!
                                </Link>
                            </p>
                            <input type="text" id="email" className="input input-form" placeholder="Email" />
                            <p className="text-right text-[#e91a1a] text-base !-mb-2 cursor-pointer">
                                <Link to={'/forgotpassword'}>Quên mật khẩu</Link>
                            </p>
                            <input type="password" id="password" className="input input-form" placeholder="Mật khẩu" />

                            <button type="submit" className="w-full input input-form !bg-[#009ef7] text-white">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
