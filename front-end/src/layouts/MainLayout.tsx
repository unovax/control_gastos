import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const Layout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <main>
                {/* The Outlet component is a placeholder for child routes */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
