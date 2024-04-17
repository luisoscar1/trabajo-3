import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Finder from './finder';
import PokemonCard from "./PokemonCard.js";

const Contenedor = () => {
    const [pokemon, setPokemon] = useState("");

    return (
        <View style={styles.container}>
            <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
            {pokemon ? (
                <PokemonCard
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    type={pokemon.types.map((type) => type.type.name).join(', ')}
                />
            ) : (
                <Text style={styles.tipo}>No se ha encontrado Pokémon</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 45,
        width: '100%',
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
    },
    imagen: {
        width: 330,
        height: 120,
    },
    tipo: {
        color: 'white',
        fontSize: 20,
    },
});

export default Contenedor;
