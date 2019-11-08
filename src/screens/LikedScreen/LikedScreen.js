import React from 'react';
import {connect} from 'react-redux';
import LikedScreenContainer from './LikedScreenContainer';

class LikedScreen extends React.Component {
  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {likedUser = []} = this.props;
    return <LikedScreenContainer goBack={this.goBack} likedUser={likedUser} />;
  }
}

const mapStateToProps = state => ({
  likedUser: state.likedUser,
});

export default connect(mapStateToProps)(LikedScreen);
