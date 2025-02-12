import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function MainLayout() {
    return (
        <div>
            <Header />
            <main className='mt-11'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout