import React from 'react';
import {View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import styles from './HomeScreenStyles';
import Card from '../../components/Card';
import {icons} from '../../assets/icons';
import {SafeAreaView} from 'react-navigation';

export default class HomeScreenContainer extends React.Component {
  renderItem = item => {
    if (!item) {
      return null;
    }
    return <Card data={item} />;
  };
  render() {
    const {users, onSwipedCards, onSwipedRight, goToLikedScreen} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.swiperView}>
          <Swiper
            cards={users}
            renderCard={this.renderItem}
            onSwiped={onSwipedCards}
            onSwipedRight={onSwipedRight}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            backgroundColor={'white'}
            stackSize={3}
          />
          {users.length === 0 && <ActivityIndicator />}
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={goToLikedScreen}>
          <Image source={icons.likedList} style={styles.buttonIcon} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
