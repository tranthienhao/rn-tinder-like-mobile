import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../assets/icons';
import get from 'lodash/get';
const {width} = Dimensions.get('window');

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentInfoIndex: 0,
    };
  }

  onIconPress = index => {
    this.setState({
      currentInfoIndex: index,
    });
  };

  render() {
    const {currentInfoIndex} = this.state;
    const {data = {}} = this.props;
    const info = [
      {
        key: 'name',
        title: 'name',
        icon: icons.profile,
        data: `${get(data, 'user.name.first', '')} ${get(
          data,
          'user.name.last',
          '',
        )}`,
      },
      {
        key: 'dob',
        title: 'birthday',
        icon: icons.list,
        data: new Date(
          parseInt(get(data, 'user.dob', 0), 10),
        ).toLocaleDateString(),
      },
      {
        key: 'address',
        title: 'address',
        icon: icons.address,
        data: get(data, 'user.location.street', ''),
      },
      {
        key: 'phone',
        title: 'phone',
        icon: icons.phone,
        data: get(data, 'user.phone', ''),
      },
      {
        key: 'email',
        title: 'email',
        icon: icons.lock,
        data: get(data, 'user.email', ''),
      },
    ];
    const currentInfo = info[currentInfoIndex];
    return (
      <View style={styles.shadowWrapper}>
        <View style={styles.cardWrapper}>
          <View style={styles.backgroundView}>
            <View style={styles.bg1} />
            <View style={styles.bg2} />
          </View>
          <View style={styles.mainContent}>
            <View style={styles.avatarWrapper}>
              {get(data, 'user.picture') && (
                <Image
                  source={{
                    uri: get(data, 'user.picture', ''),
                  }}
                  style={styles.avatar}
                />
              )}
            </View>
            <View style={styles.middleView}>
              <Text style={styles.titleText}>My {currentInfo.title} is</Text>
              <Text style={styles.contentText}>{currentInfo.data}</Text>
            </View>
            <View style={styles.bottomView}>
              {info.map((item, index) => {
                const isSelecting = index === currentInfoIndex;
                return (
                  <TouchableOpacity
                    key={item.key}
                    style={[
                      styles.iconWrapper,
                      isSelecting && styles.selectingIconWrapper,
                    ]}
                    onPress={() => this.onIconPress(index)}>
                    <Image
                      source={item.icon}
                      style={[
                        styles.iconStyle,
                        isSelecting && styles.selectingIconStyle,
                      ]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const AVATAR_SIZE = width / 3;

const styles = StyleSheet.create({
  cardWrapper: {
    height: '70%',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shadowWrapper: {
    margin: 10,
    flex: 1,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
  backgroundView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  bg1: {
    height: AVATAR_SIZE - 16,
  },
  bg2: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#c9c9c9',
  },
  mainContent: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    backgroundColor: 'white',
    borderColor: '#c9c9c9',
    borderWidth: 1,
    padding: 4,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  avatar: {
    width: '100%',
    borderRadius: AVATAR_SIZE / 2,
    aspectRatio: 1,
  },
  titleText: {
    color: '#9f9f9f',
    fontWeight: 'bold',
  },
  contentText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  middleView: {
    alignItems: 'center',
  },
  bottomView: {
    flexDirection: 'row',
  },
  iconWrapper: {
    paddingTop: 8,
    marginHorizontal: 8,
    borderTopWidth: 2,
    borderColor: 'transparent',
  },
  selectingIconWrapper: {
    borderColor: '#8bb94f',
  },
  iconStyle: {
    width: 24,
    height: 24,
    tintColor: '#d9d9d9',
  },
  selectingIconStyle: {
    tintColor: '#8bb94f',
  },
});
