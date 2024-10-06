
import heroImage from '../../img/Hero_image.png'
import Title from '../Utils/Title';
import ActionButton from '../Utils/ActionButton';
import RoundedImage from '../Utils/RoundedImage';
function HeroSection(){
    return(
        <section 
        style={{display:'grid',
                gridTemplateColumns:'repeat(12,1fr)',
                gridTemplateRows:'repeat(6,1fr)',
                }}>
                
            
            <article style={{ backgroundColor: 'var(--primary-color-1)', gridArea:'1 / 1 / -2 / -1',padding:'2rem'}}></article>
            <article style={{ gridArea: '1 / 3 / 5 / 7', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem' }}>
                <div>

                    <Title level={1}>Little Limon</Title>
                    <Title level={2}>Chicago</Title>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem veniam possimus libero neque laboriosam facere veritatis labore magni ea hic quidem, quasi harum repudiandae, consequuntur, dignissimos ad voluptate repellat perspiciatis?</p>
                </div>
                <div>

                    <ActionButton >Reserve a Table</ActionButton>
                </div>

            </article>
            <article style={{gridArea:' 2 / 7 / -1 / -2'}}>
                <RoundedImage src={heroImage} ></RoundedImage>
            </article>
        </section>
    )
}
export default HeroSection;