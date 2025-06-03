import apiClient from "./apiClient";

export const postApi = {
  // 모든 포스트 목록 조회 (검색 파라미터 없음)
  getPosts: () => apiClient.get("/posts"),

  // 특정 포스트 조회
  getPost: (postId) => apiClient.get(`/posts/${postId}`),

  // 새 포스트 생성
  createPost: (content, username) =>
    apiClient.post("/posts", { username, content }),

  // 포스트 수정 (PATCH)
  updatePost: (postId, content, username) =>
    apiClient.patch(`/posts/${postId}`, { username, content }),

  // 포스트 삭제
  deletePost: (postId) =>
    apiClient.delete(`/posts/${postId}`),

  // 포스트 좋아요 (POST)
  likePost: (postId, username) =>
    apiClient.post(`/posts/${postId}/likes`, { username }),

  // 포스트 좋아요 취소 (DELETE)
  unlikePost: (postId) =>
    apiClient.delete(`/posts/${postId}/likes`),
};

export const commentApi = {
  // 포스트의 댓글 목록 조회
  getComments: (postId) =>
    apiClient.get(`/posts/${postId}/comments`),

  // 포스트에 댓글 작성
  createComment: (postId, content, username) =>
    apiClient.post(`/posts/${postId}/comments`, { username, content }),

  // 특정 댓글 조회
  getComment: (postId, commentId) =>
    apiClient.get(`/posts/${postId}/comments/${commentId}`),

  // 특정 댓글 수정 (PATCH)
  updateComment: (postId, commentId, content, username) =>
    apiClient.patch(`/posts/${postId}/comments/${commentId}`, { username, content }),

  // 특정 댓글 삭제
  deleteComment: (postId, commentId) =>
    apiClient.delete(`/posts/${postId}/comments/${commentId}`),
};
