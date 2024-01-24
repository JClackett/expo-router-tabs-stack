import { PostItem } from "@/components/PostItem"
import { TabView } from "@/components/TabView"
import { posts } from "@/data/posts"

import { ScrollView } from "react-native"

export default function Screen() {
  return (
    <TabView title="Feed">
      <ScrollView>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ScrollView>
    </TabView>
  )
}
