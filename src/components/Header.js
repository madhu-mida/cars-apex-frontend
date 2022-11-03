
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <>
            <div>
                <div id="top-header">
                    <div className="top-header-contents">
                        <Link to='/' style={{ textAlign: 'center', color: 'white', textDecoration: 'none', justifyContent: 'center', margin: 'auto' }}>
                            <span id="top-header-content-slogan">Find Your Own Road</span>
                        </Link>

                        <div>
                            <div style={{ float: 'right' }}>
                                <Link to='/new' style={{ color: 'black' }}>
                                    <Button variant="primary" type="submit" style={{
                                        margin: 'auto', background: 'white', color: 'black', float: 'right', border: 'black'
                                    }} >
                                        Add New Car
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}

export default Header;