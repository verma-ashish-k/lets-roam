import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from './screens/MapScreen';
import Blog from './screens/Blog';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let iconSize = focused ? 30 : 25;
            if (route.name === 'Roam Map') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
            } else if (route.name === 'Blog') {
              iconName = focused ? 'ios-book' : 'ios-book-outline';
            }
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: '#E87722',
          tabBarInactiveTintColor: '#505759',
          tabBarLabelStyle: {},
          tabBarStyle: {
            backgroundColor: '#D9D9D6',
            paddingTop: 5,
          },
        })}
      >
        <Tab.Screen
          name='Roam Map'
          component={MapScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name='Blog'
          component={Blog}
          options={{
            headerShown: false,
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
