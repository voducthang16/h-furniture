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
import { useState } from 'react';
function Category() {
    const [idUpdate, setIdUpdate] = useState();
    const [idDelete, setIdDelete] = useState();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    const addCategory = (e) => {
        e.preventDefault();
        const name = document.querySelector('#add-category-name').value;
        const order = document.querySelector('#add-category-order').value;
        const status = document.querySelector('[name="status"]:checked').value;
        axios
            .post('', {
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
        const item = fakeData.filter((item) => item.id === id_item)[0];
        document.querySelector('#update-category-name').value = item.name;
        document.querySelector('#update-category-order').value = item.thutu;
        if (item.status === 0) {
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
            .patch('', {
                id: idUpdate,
            })
            .then((res) => {
                alert('Cập nhật thành công');
            })
            .catch((err) => console.log(err));
    };
    const deleteCategory = (e) => {
        e.preventDefault();
        axios.delete(`/${idDelete}`).then(() => alert('Xoá thành công'));
    };
    const fakeData = [
        { id: 1, thutu: 1, name: 'abcdef', status: 1 },
        { id: 2, thutu: 2, name: 'zxcvbn', status: 1 },
        { id: 3, thutu: 3, name: 'aaaaa', status: 0 },
    ];
    return (
        <div className="">
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
                        {fakeData.map((item, index) => (
                            <tr key={index} className="text-center h-10">
                                <td>{item.thutu}</td>
                                <td>{item.name}</td>
                                <td>{item.status === 1 ? 'Active' : 'Inactive'}</td>
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
