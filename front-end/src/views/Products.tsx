import Topbar from '../components/Topbar';
import PrimaryButton from '../components/buttons/PrimaryButton';
import DangerButton from '../components/buttons/DangerButton';
import Modal from '../components/Modal';
import { useEffect, useState } from 'react';
import EditIcon from '../components/icons/Edit';
import DeleteIcon from '../components/icons/Delete';
import LoadingIcon from '../components/icons/Loading';

interface Product {
    _id: number;
    code: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

const Products = () => {
    
    const [ createProductModal, setCreateProductModal] = useState(false);
    const [ deleteProductModal, setDeleteProductModal] = useState(false);
    const [ editProductModal, setEditProductModal] = useState(false);
    const [ loading , setLoading ] = useState(true); // [0, function(){}
    const [products, setProducts] = useState<Product[]>([]);

    const [product, setProduct] = useState({
        _id: 0,
        code: '',
        name: '',
        price: 0,
        image: '',
        description: ''
    });

    const openDeleteProductModal = (product: Product) => {
        setProduct(product);
        setDeleteProductModal(true);
    };

    const openEditProductModal = (product: Product) => {
        setProduct({
                _id: product._id ?? 0,
                code: product.code ?? '',
                name: product.name ?? '',
                price: product.price ?? 0,
                image: product.image ?? '',
                description: product.description ?? ''
        });
        setEditProductModal(true);
    };

    const closeModals = () => {
        setProduct({
            _id: 0,
            code: '',
            name: '',
            price: 0,
            image: '',
            description: ''
        });
        setCreateProductModal(false);
        setDeleteProductModal(false);
        setEditProductModal(false);
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    };

    const saveProduct = () => {
        if(product._id === 0) {
            createProduct();
        } else {
            updateProduct();
        }
    };

    const createProduct = () => {
        fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then((data: Product) => {
                setProducts([...products, data]);
                closeModals();
            });
    };

    const updateProduct = () => {
        fetch(`http://localhost:5000/api/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then((data: Product) => {
                setProducts(products.map((p: Product) => p._id === product._id ? data : p));
                closeModals();
            });
    };
    
    const deleteProduct = () => {
        fetch(`http://localhost:5000/api/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(() => {
            setProducts(products.filter((p: Product) => p._id !== product._id));
            closeModals();
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
    }

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Topbar>
                <PrimaryButton onClick={() => setCreateProductModal(true)}>Crear Producto</PrimaryButton>
            </Topbar>

            {/* Lista de productos a partir del objeto de productos*/}
            <div className='content__container'>
                <table>
                    <thead>
                        <tr>
                            <th>Acciones</th>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr>
                                <td className='p-2 text-center' colSpan={5}>
                                    <div className='flex__container__center'>
                                        <LoadingIcon /> 
                                    </div>
                                </td>
                            </tr>
                        )}
                        {!loading && products.length === 0 && (
                            <tr>
                                <td colSpan={5} className='p-2 text-center'>
                                    No hay productos para mostrar.
                                </td>
                            </tr>
                        )}
                        {!loading && products.map((product: Product) => (
                            <tr key={product._id }>
                                <td>
                                    <div className="flex__container__center">
                                        <EditIcon onClick={() => openEditProductModal(product)} className='icon__pointer'/>
                                        <DeleteIcon onClick={() => openDeleteProductModal(product)} className='icon__pointer' />
                                    </div>
                                </td>
                                <td>{product.code ?? "Sin codigo"}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td className='text-end'>{formatPrice(product.price)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                
            {/* Modal para crear productos */}

            <Modal title="Crear producto" isOpen={createProductModal || editProductModal} onClose={ closeModals }>
                <div>
                    <label htmlFor="product-code">Codigo</label>
                    <input value={product.code} name='code' onChange={inputChange} id="product-code" type="text" />
                </div>
                <div>
                    <label htmlFor="product-name">Nombre</label>
                    <input value={product.name} name='name' onChange={inputChange} id="product-name" type="text" />
                </div>
                <div>
                    <label htmlFor="product-description">Descripción</label>
                    <textarea value={product.description} name='description' onChange={inputChange} id="product-description" className='resize-none' rows={5}></textarea>
                </div>
                <div>
                    <label htmlFor="product-price">Precio</label>
                    <input value={product.price} name='price' onChange={inputChange} id="product-price" type="text" />
                </div>
                <div className='flex__container__end'>
                    <PrimaryButton onClick={ saveProduct }>Guardar</PrimaryButton>
                    <DangerButton onClick={ closeModals }>Cancelar</DangerButton>
                </div>
            </Modal>

            <Modal title='Eliminar' isOpen={deleteProductModal} onClose={() => setDeleteProductModal(false)}>
                <p>¿Está seguro que desea eliminar el producto {product.name}? Esta accion no se puede deshacer.</p>
                <div className='flex__container__end'>
                    <DangerButton onClick={ deleteProduct } >Eliminar</DangerButton>
                    <PrimaryButton onClick={() => setDeleteProductModal(false)}>Cancelar</PrimaryButton>
                </div>
            </Modal>
        </div>
    );
}

export default Products