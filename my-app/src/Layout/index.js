import { Outlet } from 'react-router-dom'
import './index.scss'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (<>
        <div className='App'>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>Sorting Algorithms</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </Navbar>
            <Outlet />
        </div>
    </>)
}

export default Layout