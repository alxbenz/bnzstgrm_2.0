export interface Posts {
  posts: Post[]
}

export interface Post {
  postId: String,
  date: String,
  imageSrc: String[],
  headline: String,
  text: String,
  tags: String[]
}