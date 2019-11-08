import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import styles from './LikedScreenStyles';
import Card from '../../components/Card';
import {SafeAreaView} from 'react-navigation';

export default class LikedScreenContainer extends React.Component {
  renderItem = item => {
    if (!item) {
      return null;
    }
    return <Card data={item} />;
  };
  render() {
    const {likedUser, goBack} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>LIKED USER SCREEN</Text>
        <View style={styles.swiperView}>
          <Swiper
            cards={likedUser}
            renderCard={this.renderItem}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            backgroundColor={'white'}
            stackSize={3}
          />
        </View>
        <TouchableOpacity style={styles.buttonWrapper} onPress={goBack}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
