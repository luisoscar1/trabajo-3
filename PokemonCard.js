
function PokemonCard({ name, brief, image, type }) {

  return (

    <Card style={{ width: "18rem", backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuXMkuKFRlk24OQg7XhoEZBLpcdE0WKV-fwj2VzK0tg&s"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <Card.Img src={image} />
      <Card.Body>
        <div style={{ backgroundColor: 'blue', color: 'white',padding: '1px 1px', borderRadius: '10px'}}>
          <Card.Title>{name}</Card.Title>
        </div>
        <Card.Text>
         <div style={{ backgroundColor: 'red', color: 'white',padding: '1px 1px', borderRadius: '10px' }}>
            {type}
         </div>
          
          {brief}
         
        </Card.Text>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>

  );



}

export default PokemonCard;
