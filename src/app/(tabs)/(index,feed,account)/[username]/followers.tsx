import { ScreenView } from "@/components/ScreenView"
import { ScrollView } from "react-native"

export default function Screen() {
  return (
    <ScreenView title="User's followers">
      <ScrollView className="flex-1"></ScrollView>
    </ScreenView>
  )
}
