import { BsPlus } from 'react-icons/bs';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { BsPencil } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
function Category() {
    const [listCate, setListCate] = useState([]);
    const [idUpdate, setIdUpdate] = useState();
    const [idDelete, setIdDelete] = useState();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    const [totalItem, setTotalItem] = useState([]);
    const itemPerPage = 3;
    const paginationQuantity = Math.ceil(totalItem / itemPerPage);
    const [paginationArr, setPaginationArr] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const addCategory = (e) => {
        e.preventDefault();
        const name = document.querySelector('#add-category-name').value;
        const order = document.querySelector('#add-category-order').value;
        const status = document.querySelector('[name="status"]:checked').value;
        axios
            .post('http://localhost/be-f-furniture/public/api/add-category', {
                name: name,
                thu_tu: order,
                status: status,
            })
            .then((res) => {
                alert('Thêm thành công');
            })
            .catch((err) => console.log(err));
    };
    const updateCategoryContent = (id_item) => {
        const item = listCate.filter((item) => item.id === id_item)[0];
        document.querySelector('#update-category-name').value = item.ten_loai;
        document.querySelector('#update-category-order').value = item.thu_tu;
        if (item.trang_thai === 0) {
            document.querySelector('#update-active').checked = true;
        } else {
            document.querySelector('#update-in-active').checked = true;
        }
    };
    const updateCategory = (e) => {
        e.preventDefault();
        const name = document.querySelector('#update-category-name').value;
        const order = document.querySelector('#update-category-order').value;
        const status = document.querySelector('[name="update_status"]:checked').value;
        axios
            .post('http://localhost/be-f-furniture/public/api/update-category', {
                id: idUpdate,
                name: name,
                thu_tu: order,
                status: status,
            })
            .then((res) => {
                alert('Cập nhật thành công');
            })
            .catch((err) => console.log(err));
    };
    const deleteCategory = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost/be-f-furniture/public/api/delete-category`, {
                id: idDelete,
            })
            .then(() => alert('Xoá thành công'));
    };

    const getCategory = (currentPage = 1) => {
        axios
            .get(`http://localhost/be-f-furniture/public/api/admin-category?page=${currentPage}`)
            .then((res) => {
                setListCate(res.data.data);
                setTotalItem(res.data.links);
            })
            .catch((err) => console.log(err));
    };
    const functionAwait = async () => {
        await getCategory();
        const arr = [];
        console.log(totalItem);
        if (totalItem) {
            for (let i = 1; i <= paginationQuantity; i++) {
                arr.push(i);
            }
            console.log(arr);
            setPaginationArr(arr);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div>
            <div className="h-20 flex items-center">
                <button
                    onClick={onAddOpen}
                    className="flex items-center hover:opacity-80 transition-all
                px-4 py-2 rounded-lg bg-[#eff1f6] text-[#13a5f7] text-base"
                >
                    <BsPlus className="mr-3" />
                    Thêm loại sản phẩm
                </button>
            </div>
            <div className="bg-[#ebe2e2] mr-5 p-4 rounded-xl">
                <h5 className="font-semibold text-2xl">Danh sách loại sản phẩm</h5>
                <table className="text-base font-normal w-full border-collapse">
                    <thead>
                        <tr className="h-16">
                            <th>Số thứ tự</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCate.map((item, index) => (
                            <tr key={index} className="text-center h-10">
                                <td>{item.thu_tu}</td>
                                <td>{item.ten_loai}</td>
                                <td>{item.trang_thai === 1 ? 'Active' : 'Inactive'}</td>
                                <td className="flex justify-center space-x-4">
                                    <BsPencil
                                        onClick={() => {
                                            onUpdateOpen();
                                            setIdUpdate(item.id);
                                            setTimeout(() => {
                                                updateCategoryContent(item.id);
                                            }, 500);
                                        }}
                                        className="cursor-pointer hover:opacity-80"
                                    />
                                    <MdDeleteOutline
                                        onClick={() => {
                                            onDeleteOpen();
                                            setIdDelete(item.id);
                                        }}
                                        className="cursor-pointer hover:opacity-80"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="container mt-20">
                    <div className="grid grid-cols-12">
                        <div className="col-span-9 col-start-4 flex justify-center items-center space-x-4">
                            <ul className="flex space-x-2">
                                {totalItem.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`pagination-button ${index === currentPage ? 'active' : ''}`}
                                        onClick={() => {
                                            setCurrentPage(index);
                                            getCategory(index);
                                        }}
                                    >
                                        {item.label === '&laquo; Previous' ? (
                                            <span>
                                                <AiOutlineArrowLeft />
                                            </span>
                                        ) : item.label === 'Next &raquo;' ? (
                                            <span>
                                                <AiOutlineArrowRight />
                                            </span>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add */}
            <Modal isOpen={isAddOpen} onClose={onAddClose}>
                <ModalOverlay />
                <ModalContent>
                    <form action="" onSubmit={addCategory}>
                        <ModalHeader>Thêm loại sản phẩm</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody className="space-y-4">
                            <input
                                id="add-category-name"
                                type="text"
                                className="input input-form"
                                placeholder="Tên loại sản phẩm"
                            />
                            <input
                                id="add-category-order"
                                type="text"
                                className="input input-form"
                                placeholder="Thứ tự"
                            />
                            <h6 className="text-base">Trạng thái</h6>
                            <div className="text-base space-x-2">
                                <label htmlFor="active">Active</label>
                                <input type="radio" name="status" id="active" value="0" />
                                <label htmlFor="in-active">Inactive</label>
                                <input type="radio" name="status" id="in-active" value="1" />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme="blue" mr={3}>
                                Thêm
                            </Button>
                            <Button onClick={onAddClose} colorScheme="red">
                                Đóng
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            {/* Update */}
            <Modal isOpen={isUpdateOpen} onClose={onUpdateClose}>
                <ModalOverlay />
                <ModalContent>
                    <form action="" onSubmit={updateCategory}>
                        <ModalHeader>Cập nhật loại sản phẩm</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody className="space-y-4">
                            <input
                                id="update-category-name"
                                type="text"
                                className="input input-form"
                                placeholder="Tên loại sản phẩm"
                            />
                            <input
                                id="update-category-order"
                                type="text"
                                className="input input-form"
                                placeholder="Thứ tự"
                            />
                            <h6 className="text-base">Trạng thái</h6>
                            <div className="text-base space-x-2">
                                <label htmlFor="update-active">Active</label>
                                <input type="radio" name="update_status" id="update-active" value="0" />
                                <label htmlFor="update-in-active">Inactive</label>
                                <input type="radio" name="update_status" id="update-in-active" value="1" />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme="blue" mr={3}>
                                Thêm
                            </Button>
                            <Button onClick={onUpdateClose} colorScheme="red">
                                Đóng
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            {/* Delete */}
            <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
                <ModalOverlay />
                <ModalContent>
                    <form action="" onSubmit={deleteCategory}>
                        <ModalHeader>Xóa loại sản phẩm</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody className="space-y-4">
                            <h6 className="text-xl">Bạn có muốn xóa loại sản phẩm này không?</h6>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme="blue" mr={3}>
                                Xóa
                            </Button>
                            <Button onClick={onDeleteClose} colorScheme="red">
                                Đóng
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Category;
