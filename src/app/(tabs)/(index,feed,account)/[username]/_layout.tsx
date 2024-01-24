import { Stack } from "expo-router"

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="followers" />
      <Stack.Screen name="save" options={{ presentation: "modal" }} />
    </Stack>
  )
}
