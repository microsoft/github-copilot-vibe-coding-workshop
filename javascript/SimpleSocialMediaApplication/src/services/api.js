// Detect if running in Codespaces and use the appropriate backend URL
const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href;
    
    // If running on a Codespaces domain, construct the backend URL
    if (currentUrl.includes('.app.github.dev')) {
      const host = window.location.hostname;
      const parts = host.split('-');
      // Extract the Codespaces prefix (e.g., "obscure-barnacle-jj64x5wj96p72prrr")
      const codespacesPrefix = parts.slice(0, -1).join('-');
      return `https://${codespacesPrefix}-8000.app.github.dev/api`;
    }
  }
  
  // Default to localhost for local development
  return 'http://localhost:8000/api';
};

const API_BASE_URL = getApiBaseUrl();

console.log('API Base URL:', API_BASE_URL);

class APIService {
  async request(method, endpoint, body = null) {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      console.log(`[API] ${method} ${url}`);
      
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        const errorMessage = error.message || `HTTP ${response.status}`;
        console.error(`[API] Error: ${errorMessage}`);
        throw new Error(errorMessage);
      }

      console.log(`[API] Success: ${method} ${url}`);
      
      if (response.status === 204) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(`[API] Request failed:`, error.message);
      throw error;
    }
  }

  // Posts
  getPosts() {
    return this.request('GET', '/posts');
  }

  getPostById(postId) {
    return this.request('GET', `/posts/${postId}`);
  }

  createPost(username, content) {
    return this.request('POST', '/posts', { username, content });
  }

  updatePost(postId, username, content) {
    return this.request('PATCH', `/posts/${postId}`, { username, content });
  }

  deletePost(postId) {
    return this.request('DELETE', `/posts/${postId}`);
  }

  // Comments
  getCommentsByPostId(postId) {
    return this.request('GET', `/posts/${postId}/comments`);
  }

  getCommentById(postId, commentId) {
    return this.request('GET', `/posts/${postId}/comments/${commentId}`);
  }

  createComment(postId, username, content) {
    return this.request('POST', `/posts/${postId}/comments`, { username, content });
  }

  updateComment(postId, commentId, username, content) {
    return this.request('PATCH', `/posts/${postId}/comments/${commentId}`, { username, content });
  }

  deleteComment(postId, commentId) {
    return this.request('DELETE', `/posts/${postId}/comments/${commentId}`);
  }

  // Likes
  likePost(postId, username) {
    return this.request('POST', `/posts/${postId}/likes`, { username });
  }

  unlikePost(postId) {
    return this.request('DELETE', `/posts/${postId}/likes`);
  }

  // Health check
  async isAvailable() {
    try {
      await this.getPosts();
      return true;
    } catch {
      return false;
    }
  }
}

export const api = new APIService();
