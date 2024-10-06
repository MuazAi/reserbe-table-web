
import Title from "./Title";
import deliverIcon from '../../img/deliverIcon.png'

function Card({children,title,price,image,order_link}) {
  return (
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridTemplateRows: 'repeat(4,auto)', backgroundColor: 'gray', borderRadius: ' 1rem 1rem 0 0' }}>
          <img src={image} width='100%' alt={title + " image"} style={{ gridArea: '1 / 1 / 2/-1 ' }} />
          <section style={{ display: 'flex', gridColumn: '1/-1', justifyContent: 'space-between', padding: '0 1rem' }}>
              <Title level={4} style={{}} >{title}</Title>
              <Title level={4} style={{ display: 'block', float: 'right' }}>
                  <span style={{ color: 'var(--primary-color-2)', fontSize: '.8rem' }}>
                      {price}$
                  </span>

              </Title>
          </section>
          <p style={{ fontSize: '.8rem', padding: '0 1rem', gridArea: '3 / 1 / 4 / -1' }}>{children}</p>
          <a href={order_link} style={{ fontSize: '.8rem', padding: '1rem', gridArea: '4 / 1 / 5 / -1' }}> <span>Order a delivery </span> <i><img src={deliverIcon} alt="" /></i></a>
      </section>
  )
}
export default Card;