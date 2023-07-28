export default class PostModel {
  // DEFINE CONSTRUCTOR HERE

  // GET ALL POSTS (WITH LIKES AND COMMENTS)
  static getAll() {}

  // GET ALL POSTS (WITH LIKES AND COMMENTS) OF A USER WITH USER ID
  static getUserPosts(userId) {}

  // GET A SINGLE POST (WITH LIKES AND COMMENTS) WITH POST ID
  static getUserPost(postId) {}

  // CREATE A NEW POST
  static add(post) {}

  // DELETE A POST
  static delete(postId, userId) {}

  // UPDATE A POST
  static update(updatedData, userId, postId) {}
}

// STORE POSTS HERE
