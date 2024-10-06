import Title from "./Utils/Title";
import Hero_image from '../img/Hero_image.png'

function Footer(){
    return(
        <nav style={{ backgroundColor: '#D9D9D9', display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', width: '90vw', margin: '3rem 0' }}>

            <article style={{ gridArea: '1 / 1 / 1 /4 ', padding: '4rem' }}>
                <img src={Hero_image} alt="" width='80%' />
            </article>
            <article style={{ gridArea: '1 / 4 / 1 /6 ' }}>
                <Title level={1} color="var(--primary-color-1)">Dormat Navigation</Title>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>

            </article>

            <article style={{ gridArea: '1 / 7 / 1 /9 ' }}>
                <Title level={1} color="var(--primary-color-1)">Contact Us</Title>
                <ul>

                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </article>

            <article style={{ gridArea: '1 / 10 / 1 / -1' }}>
                <Title level={1} color="var(--primary-color-1)">Social Media</Title>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>

            </article>

        </nav>
    )
}

export default Footer;
