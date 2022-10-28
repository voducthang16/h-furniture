import axios from 'axios';
function ForgotPassword() {
    const handleForgotPassword = (e) => {
        e.preventDefault();
        const email = document.querySelector('#email');
        axios
            .post('http://localhost/be-f-furniture/public/api/auth/forgot-password', {
                email: email,
            })
            .then(function (response) {
                alert('Chúng tôi đã gửi mật khẩu mới về email của bạn');
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container">
            <div className="text-center w-2/5 mx-auto">
                <h5 className="text-2xl py-4">Quên Mật Khẩu</h5>
                <form action="" onSubmit={handleForgotPassword}>
                    <input type="email" id="email" className="input input-form" placeholder="Nhập email" />
                    <button type="submit" className="w-full my-4 input input-form !bg-[#009ef7] text-white">
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
