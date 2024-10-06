import mealImage from '../../img/mealImage.png'
import Card from './Card'
function CardBanner() {
  return (
      <div style={{ display: 'flex', columnGap: '3rem' }}>
          <Card title="Greek salad" price="12.00" image={mealImage} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi officia, facere unde fugiat nemo reprehenderit dignissimos illo maiores doloremque. Qui, culpa ratione numquam fugiat quod repellat ut necessitatibus harum?</Card>
          <Card title="Greek salad" price="12.00" image={mealImage} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi officia, facere unde fugiat nemo reprehenderit dignissimos illo maiores doloremque. Qui, culpa ratione numquam fugiat quod repellat ut necessitatibus harum?</Card>
          <Card title="Greek salad" price="12.00" image={mealImage} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi officia, facere unde fugiat nemo reprehenderit dignissimos illo maiores doloremque. Qui, culpa ratione numquam fugiat quod repellat ut necessitatibus harum?</Card>
      </div>
  )
}

export default CardBanner
