import axios from 'axios';
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function Changepass() {
    const handleChangepass = (e) => {
        e.preventDefault();
        const old_password = document.querySelector('#old_password').value;
        const new_password = document.querySelector('#new_password').value;
        axios
            .post(
                'http://localhost/be-f-furniture/public/api/auth/change-password',
                {
                    old_password: old_password,
                    new_password: new_password,
                },
                {
                    headers: {
                        Authorization: `Bearer ` + getCookie('access_token'),
                    },
                },
            )
            .then(function (response) {
                alert('Đổi mật khẩu thành công');
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container">
            <div className="text-center w-2/5 mx-auto">
                <h5 className="text-2xl py-4">Đổi mật khẩu</h5>
                <form className="space-y-4" action="" onSubmit={handleChangepass}>
                    <input
                        type="password"
                        id="old_password"
                        className="input input-form"
                        placeholder="Nhập Mật Khẩu Cũ"
                    />
                    <input
                        type="password"
                        id="new_password"
                        className="input input-form"
                        placeholder="Nhập Mật Khẩu Mới"
                    />
                    <button type="submit" className="w-full my-4 input input-form !bg-[#009ef7] text-white">
                        Xác nhận
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Changepass;
