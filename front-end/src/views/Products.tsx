import Topbar from '../components/Topbar';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Modal from '../components/Modal';
import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}
/* 
const products: Product[] = [
    {
        'id': 1,
        'name': "Product 1",
        'price': 1,
        'image': "https://picsum.photos/200/300",
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam ni",
    }
];
 */
const Products = () => {
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const closeProductModal = () => {
        setIsProductModalOpen(false);
    };
    
    const openProductModal = () => {
        setIsProductModalOpen(true);
    };

    return (
        <div>
            <Topbar>
                <PrimaryButton onClick={openProductModal}>Crear Producto</PrimaryButton>
            </Topbar>
            <Modal title="Crear producto" isOpen={isProductModalOpen} onClose={closeProductModal}>
                <div>
                    <label htmlFor="code">Codigo</label>
                    <input id="code" type="text" />
                </div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input id="name" type="text" />
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input id="price" type="text" />
                </div>
            </Modal>
        </div>
    );
}

export default Products