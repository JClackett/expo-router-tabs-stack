import { ScreenView } from "@/components/ScreenView"
import { UserItem } from "@/components/UserItem"
import { users } from "@/data/users"
import { ScrollView } from "react-native"

export default function Screen() {
  const random5Users = users.sort(() => Math.random() - Math.random()).slice(0, 5)
  return (
    <ScreenView title="User's followers">
      <ScrollView className="flex-1">
        {random5Users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ScrollView>
    </ScreenView>
  )
}
