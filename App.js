import React from 'react';
import { View, Image, StatusBar, ScrollView, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

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

const App = () => {
  return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <StatusBar hidden={true} />
        <Text style={styles.title}>GetABoat - For Sale</Text>

        <Boat
            name="Sea Ray 500 Sundancer"
            description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            icon_name="anchor"
            picture={require('./img/sea_ray.jpg')}
        />
        <Boat
            name="Four Winns Horizon 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            icon_name="anchor"
            picture={require('./img/four_winns.jpg')}
        />
        <Boat
            name="Flipper 640 ST"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            icon_name="anchor"
            picture={require('./img/flipper.jpg')}
        />
        <Boat
            name="Princess V48"
            description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            icon_name="anchor"
            picture={require('./img/princess.jpg')}
        />
        <Boat
            name="Bayliner 175 Bowrider"
            description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            icon_name="anchor"
            picture={require('./img/bayliner.jpg')}
        />
        <Boat
            name="Fairline Targa 47"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            icon_name="anchor"
            picture={require('./img/fairline.jpg')}
        />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  boatName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  boatImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default App;
