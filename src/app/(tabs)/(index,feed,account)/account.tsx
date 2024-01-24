import { TabView } from "@/components/TabView"
import { Link } from "expo-router"

export default function Screen() {
  return (
    <TabView title="Account">
      <Link push href="/login">
        Login
      </Link>
    </TabView>
  )
}
