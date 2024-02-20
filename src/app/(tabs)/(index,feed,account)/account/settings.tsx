import { ScreenView } from "@/components/ScreenView"
import { Text } from "react-native"

export default function Screen() {
  return (
    <ScreenView title="Settings">
      <Text>This is a nested screen</Text>
    </ScreenView>
  )
}
