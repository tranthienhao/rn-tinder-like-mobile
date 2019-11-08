import React from 'react';
import {connect} from 'react-redux';
import HomeScreenContainer from './HomeScreenContainer';
import {fetchUserData} from '../../redux/userService';
import isEmpty from 'lodash/isEmpty';
import {likeUser} from '../../redux/userActions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchMoreUser();
    this.fetchMoreUser();
  }

  static getDerivedStateFromProps(props, state) {
    const {userData = {}} = props;
    const {users} = state;
    if (!isEmpty(userData) && userData !== users[users.length - 1]) {
      return {
        users: [...users, userData],
      };
    }
    return null;
  }

  fetchMoreUser = () => {
    this.props.dispatch(fetchUserData());
  };

  handleOnSwipedCards = index => {
    this.fetchMoreUser();
  };

  handleOnSwipedRight = index => {
    const {users} = this.state;
    this.props.dispatch(likeUser(users[index]));
  };

  goToLikedScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('LikedScreen');
  };

  render() {
    const {users} = this.state;
    return (
      <HomeScreenContainer
        users={users}
        onSwipedCards={this.handleOnSwipedCards}
        onSwipedRight={this.handleOnSwipedRight}
        goToLikedScreen={this.goToLikedScreen}
      />
    );
  }
}

const mapStateToProps = state => ({
  userData: state.fetchUserData.data,
});

export default connect(mapStateToProps)(HomeScreen);
