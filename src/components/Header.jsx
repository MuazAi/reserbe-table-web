import logo from "../img/logo.png";
function Header({children}){
    return (
        <header style={{display:'grid',gridTemplateColumns:'auto 1fr',width:'80%', margin:'auto'}}>
            <img src={logo} />
            {children}
        </header>
    )
}

export default Header;