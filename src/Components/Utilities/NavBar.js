import React from 'react';

const NavBar = () => {
    return (
        <div>
            <header class="header">  
                <div class="header__logo">
                <img src={"https://cdn0.iconfinder.com/data/icons/computer-and-hardware-free/32/Computer__Computer_Hardware_SSD_Storage_Technology-512.png"} height={"60rem"} width={"60rem"} alt="main logo" />
                </div>
                <div class="header__title">
                        <h1 class="headings__styling--h1"><span style={{color: "skyblue"}}>Titan</span>Solutions</h1>
                </div>

                <nav class="header__nav">
                        <ul class="header__nav-items">
                            <li><a href={'/'}>Home</a></li>
                            <li><a href={'/products'}>Products</a></li>
                            <li><a href={'/contact'}>Contact Us</a></li>
                        </ul>
                </nav>
            </header>

        </div>
    )
}

export default NavBar;