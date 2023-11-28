const Stack = createNativeStackNavigator();
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Screen01 } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Screen01"
        >
          <Stack.Screen name="Screen01" component={Screen01} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
