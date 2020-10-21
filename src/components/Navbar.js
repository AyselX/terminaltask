import React from 'react';


const Navbar = () => {

    const navstyle = {
    color: '#FFFFFF',
    fontFamily: 'Enriqueta',
    fontSize: '25px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '33px',
    textAlign: 'left'

}
return (

    <div id="header">
        <nav style={{backgroundColor: "#4C5F6E"}} class="navbar navbar-expand-lg">
            <div class="container">
                <a style={navstyle} class="navbar-brand" href="#">QMATIC</a>
            </div>
        </nav>
    </div>

)

}


export default Navbar;