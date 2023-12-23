import {Link, NavLink} from 'react-router-dom';



const Nav = () => {

    return(
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                            <div className="container-fluid">
                                <Link className="navbar-brand" to='/'>UrWorld</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                                        <li className="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link active"  aria-current="page" to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to='/service'>Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to='/about'>About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>

    );
}


export default Nav;