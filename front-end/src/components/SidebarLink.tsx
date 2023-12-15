import { Link } from 'react-router-dom';
import DashboardIcon from './icons/Dashboard';
import PurchaseIcon from './icons/Purchase';
import ProductIcon from './icons/Product';
interface SidebarLinkProps {
        to: string;
        name: string;
        icon: string; // Change the type to ReactNode
}

const icons: { [key: string]: React.ReactNode } = { // Add index signature to allow indexing with a string
    dashboard: (
        <DashboardIcon className='w-5 h-5' />
    ),
    purchase: (
        <PurchaseIcon className='w-5 h-5' />
    ),
    product: (
        <ProductIcon className='w-5 h-5' />
    )
}
const SidebarLink: React.FC<SidebarLinkProps> = ({ to, name, icon }) => {
    return (
        <Link to={to} className='flex items-center space-x-2 px-4 py-2 hover:bg-gray-900 cursor-pointer'>
            { icons[icon] }
            <span className='text-white text-lg font-semibold'>
                { name }
            </span>
        </Link>
    );
};

export default SidebarLink;
