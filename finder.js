import { useEffect, useState } from "react";

function Finder({texto, foundPokemon}) {

  const[name, setName]=useState("");


 

  function getPokemonData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        foundPokemon(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
  }


  return (
    <Row>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Nombre del POkemon"
          aria-label=""
          aria-describedby="basic-addon2"
          onChange={(e) => setName(e.target.value)}
        />
        
        <Button variant="outline-secondary" id="button-addon2" onClick={getPokemonData}>
          {texto}
        </Button>
      </InputGroup>
    </Row>
  );
}

export default Finder;
