import { PostItem } from "@/components/PostItem"
import { TabView } from "@/components/TabView"
import { UserItem } from "@/components/UserItem"
import { posts } from "@/data/posts"
import { users } from "@/data/users"
import { Text, View } from "react-native"

export default function Screen() {
  const randomPost = posts[Math.floor(Math.random() * posts.length)]
  const randomUser = users[Math.floor(Math.random() * users.length)]
  return (
    <TabView title="Home">
      <View className="gap-6">
        <View>
          <Text className="text-xl">Random Post</Text>
          <PostItem post={randomPost} />
        </View>
        <View>
          <Text className="text-xl">Random user</Text>
          <UserItem user={randomUser} />
        </View>
      </View>
    </TabView>
  )
}
