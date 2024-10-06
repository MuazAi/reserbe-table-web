function  Nav(){
    return(
        <nav style={NavStyle.nav} >
            <ul className="nav-links" style={NavStyle['nav-links']} >
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    )
}   
export default Nav;
const NavStyle = {
    nav:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:'10vh',
        backgroundColor:'#fff',
        color:'#000'
    },
    'nav-links':{
        width:'50%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        listStyle:'none'
    },
    'a':{
        textDecoration:'none',
        color:'#000'
    }
}
