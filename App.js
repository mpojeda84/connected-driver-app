import React from 'react'
import { YellowBox, Animated, Easing } from 'react-native'
import Home from './src/screens/Home'
import Driving from './src/screens/Driving'
import Community from './src/screens/Community'
import Alerts from './src/screens/Alerts'
import { Font } from 'expo'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: Home
  },
  Driving: {
    screen: Driving
  },
  Community: {
    screen: Community
  },
  Alerts: {
    screen: Alerts
  }
})
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: {
      screen: Home
    },
    Driving: {
      screen: Driving
    },
    Community: {
      screen: Community
    },
    Alerts: {
      screen: Alerts
    }
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({ transitionSpec: { duration: 0, timing: Animated.timing, easing: Easing.step0 } })
  }
)
export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      fontLoaded: false
    }
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated'
    ])
  }
  async componentDidMount () {
    await Font.loadAsync({
      'SourceSansPro-ExtraLight': require('./src/assets/fonts/Arial.ttf') /* Fallback Font */,
      'SourceSansPro-ExtraLightIt': require('./src/assets/fonts/Arial.ttf') /* Fallback Font */,
      'SourceSansPro-BlackIt': require('./src/assets/fonts/Arial.ttf') /* Fallback Font */,
      'SourceSansPro-It': require('./src/assets/fonts/Arial.ttf') /* Fallback Font */,
      'SourceSansPro-LightIt': require('./src/assets/fonts/Arial.ttf') /* Fallback Font */,
      'SourceSansPro-Semibold': require('./src/assets/fonts/Arial.ttf') /* Fallback Font */,
      'Oswald-Regular': require('./src/assets/fonts/Oswald-Regular.ttf'),
      'Oswald-LightItalic': require('./src/assets/fonts/Oswald-LightItalic.ttf'),
      'Oswald-Bold': require('./src/assets/fonts/Oswald-Bold.ttf'),
      'Oswald-ExtraLight': require('./src/assets/fonts/Oswald-ExtraLight.ttf'),
      'Oswald-MediumItalic': require('./src/assets/fonts/Oswald-MediumItalic.ttf'),
      'Oswald-RegularItalic': require('./src/assets/fonts/Oswald-RegularItalic.ttf'),
      'Oswald-BoldItalic': require('./src/assets/fonts/Oswald-BoldItalic.ttf'),
      'Oswald-Heavy': require('./src/assets/fonts/Oswald-Heavy.ttf'),
      'Oswald-Light': require('./src/assets/fonts/Oswald-Light.ttf'),
      'Oswald-HeavyItalic': require('./src/assets/fonts/Oswald-HeavyItalic.ttf'),
      'Oswald-Medium': require('./src/assets/fonts/Oswald-Medium.ttf'),
      'Oswald-Demi-BoldItalic': require('./src/assets/fonts/Oswald-Demi-BoldItalic.ttf'),
      'ConthraxSb-Regular': require('./src/assets/fonts/conthrax-sb.ttf'),
      'Material Design Icons': require('./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'),
      'FontAwesome': require('./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf')
    })

    this.setState({ fontLoaded: true })
    // console.warn("Fallback font is being used. Please check App.js file.");
  }
  render () {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />
  }
}
