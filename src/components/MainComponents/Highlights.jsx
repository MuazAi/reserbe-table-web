import ActionButton from "../Utils/ActionButton";
import CardBanner from "../Utils/CardBanner";
import Title from "../Utils/Title";

function Highlights() {
    return (
        <article style={Styles.container}>
            <section style={{gridArea:'1 / 1 / 1 / -1',display:'flex', justifyContent:'space-between',alignItems:'center',padding:'2rem'}}>
                <Title level={1} color="black" >This Week Specials</Title>
                <ActionButton>Order online</ActionButton>
            </section>
            
            <section style={{gridArea:'2 / 1 / 2 / -1'}}>
                <CardBanner ></CardBanner>
            </section>
        </article>
    )
}
export default Highlights;

const Styles = {
    container:{
        display:'grid',
        gridTemplateColumns:'repeat(12,1fr)',
        gridTemplateRows:'1fr ,auto',
        width:'60vw',
        margin:'auto',
        }
}