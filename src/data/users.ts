export const USER_COUNT = 20
export const users = Array.from({ length: USER_COUNT }).map((_, i) => ({
  id: i,
  username: `@user${i}`,
  name: `User ${i}`,
}))

export type User = (typeof users)[number]
