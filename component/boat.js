import React from 'react';
import { View, Image, StatusBar, ScrollView, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import App from "../App";

const Boat = ({ name, description, icon_name, picture }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <Icon name={icon_name} size={20} color="#000" />
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.boatImage} />
        </View>
    );
};

export default Boat;
