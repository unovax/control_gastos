import Title  from './Title';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <div className='flex'>
        <div className='bg-gray-800 text-white flex flex-col h-screen w-auto'>
            <Title title='S-L Culinary Hub' />
            <SidebarLink to='/tablero' name='Tablero' icon="dashboard" />
            <SidebarLink to='/compras' name='Compras' icon="purchase" />
            <SidebarLink to='/productos' name='Productos' icon="product" />
        </div>
    </div>
  );
};

export default Sidebar;
