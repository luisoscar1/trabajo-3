import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ParteSuperior = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
                style={styles.imagen}
            />
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
});

export default ParteSuperior;
