import apiClient from "./apiClient";

export const authApi = {
  login: (username) => apiClient.post("/login", { username }),
};

export const postApi = {
  getPosts: (page = 1, limit = 10) =>
    apiClient.get(`/posts?page=${page}&limit=${limit}`),

  getPost: (postId) => apiClient.get(`/posts/${postId}`),

  createPost: (content, username) =>
    apiClient.post("/posts", { content, username }),

  updatePost: (postId, content, username) => {
    return apiClient.put(
      `/posts/${postId}`,
      { content },
      { params: { username } }
    );
  },

  deletePost: (postId, username) => {
    return apiClient.delete(`/posts/${postId}`, {
      params: { username },
    });
  },

  likePost: (postId, username) => {
    return apiClient.post(`/posts/${postId}/like`, null, {
      params: { username },
    });
  },

  unlikePost: (postId, username) => {
    return apiClient.delete(`/posts/${postId}/like`, {
      params: { username },
    });
  },
};

export const commentApi = {
  getComments: (postId, page = 1, limit = 10) =>
    apiClient.get(`/posts/${postId}/comments?page=${page}&limit=${limit}`),

  createComment: (postId, content, username) =>
    apiClient.post(`/posts/${postId}/comments`, { content, username }),

  updateComment: (commentId, content, username) => {
    return apiClient.put(
      `/comments/${commentId}`,
      { content },
      {
        params: { username },
      }
    );
  },

  deleteComment: (commentId, username) => {
    return apiClient.delete(`/comments/${commentId}`, {
      params: { username },
    });
  },
};

export const searchApi = {
  searchUsers: (username, page = 1, limit = 10) => {
    return apiClient.get(`/search`, {
      params: {
        username, 
        page,
        limit,
      },
    });
  },
};

export const userApi = {
  getUserProfile: (userId) => apiClient.get(`/users/${userId}`),
};
