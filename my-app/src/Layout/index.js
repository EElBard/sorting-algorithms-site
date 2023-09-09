import { Outlet } from 'react-router-dom'
import './index.scss'
import Topnav from '../Topnav'

const Layout = () => {
    return (<>
        <div className='App'>
            <Topnav />
        </div>
        <Outlet />
    </>)
}

export default Layout