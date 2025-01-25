import './Sidebar.css'
import { Outlet, Link } from 'react-router-dom'

const Sidebar = () => {
    return(
        <div className='container'>
            <h1>I am a Sidebar</h1>
            <picture>
                <img src="" alt="Logo" />
            </picture>
            <ul>
                <li className='dashboard'>
                    <Link to="/">Dashboard</Link>
                </li>
                <li className='transactions'>
                    <Link to='/transactions'>Transactions</Link>
                </li>
                <li className='budgeting'>
                    <Link to='budgeting'>Budgeting</Link>
                </li>
                <li className='AandL'>
                    <Link to='AandL'>AandL</Link>
                </li>
                <li className='savings'>
                    <Link to='savings'>savings</Link>
                </li>
                <li className='report'>
                    <Link to='report'>report</Link>
                </li>
                <li className='payments'>
                    <Link to='payments'>payments</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Sidebar