import { Tabs } from "expo-router"

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "map",
// }

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="(index)"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="(index)" options={{ tabBarLabel: "Home" }} />
      <Tabs.Screen name="(feed)" options={{ tabBarLabel: "Feed" }} />
      <Tabs.Screen name="(account)" options={{ tabBarLabel: "Account" }} />
    </Tabs>
  )
}
