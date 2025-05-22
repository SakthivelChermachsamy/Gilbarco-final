import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
    var user_name = "Sanjay"
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 border w-100% sticky-top">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" style={{ width: 200 + 'px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/Supplier_Dashboard' >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Pending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">RFQ</a>
                        </li>
                        <li className="nav-item dropdown " >
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={profile} className='pe-2 ' style={{ width: 40 + 'px' }} alt="profile" />
                                {user_name}
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/Profile'>Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}