import { TabView } from "@/components/TabView"
import { Link } from "expo-router"
import { View } from "react-native"

export default function Screen() {
  return (
    <TabView title="Account">
      <View className="gap-6">
        <Link push href="/login">
          Open Login modal
        </Link>
        <Link push href="/(tabs)/(account)/account/settings">
          Push settings
        </Link>
      </View>
    </TabView>
  )
}
