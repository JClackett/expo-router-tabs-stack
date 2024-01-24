import { USER_COUNT } from "./users"

export const posts = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  name: `Post #${i}`,
  userId: Math.floor(Math.random() * USER_COUNT),
}))

export type Post = (typeof posts)[number]
