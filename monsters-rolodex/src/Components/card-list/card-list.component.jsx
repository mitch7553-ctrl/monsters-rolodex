import Card from '../card/card.component';
import './card-list.styles.css'
const CardList = ({monsters}) => {
	return (
		<div className='card-list-container'>
      	{monsters.map(({name, email, id}, idx) => {
        console.log(`${name}-${idx}`)
        return <Card key={`${name}-${idx} `}name={name} email={email} id={id}></Card>
      })
    }
		</div>
		)	
}

export default CardList;