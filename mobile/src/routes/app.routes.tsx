import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen
      name="home"
      component={Home}
      />
      <Screen
      name="new"
      component={New}
      />
      <Screen
      name="habit"
      component={Habit}
      />
    </Navigator>
  )
}