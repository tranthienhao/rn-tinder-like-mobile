import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LikedScreen from './screens/LikedScreen/LikedScreen';

const MainNavigator = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    LikedScreen: {screen: LikedScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
  },
);

export default createAppContainer(MainNavigator);
