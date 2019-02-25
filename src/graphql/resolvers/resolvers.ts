export const resolvers = {
  Mutation: {
    setUpvotedPost: () => {
      return null
    },
  },
}

export const defaults = {
  upvotedPost: {
    id: 0,
    title: 'query',
    votes: 0,
    author: { lastName: 'default', __typename: 'Author' },
    __typename: 'Post',
  },
}

export const typeDefs = `
  type Mutation {
    setUpvotedPost(upvotedPost: Post!): null
  }
  type Query {
    upvotedPost: Post
  }
  type Author {
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
  }
  type Post {
    id: Int
    title: String
    text: String
    votes: Int
    author: Author
  }
`
