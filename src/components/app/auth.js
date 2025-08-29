import api from './api';

const auth = {
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data.user;
  },

  async register(userData) {
    const response = await api.post('/auth/register', userData);
    localStorage.setItem('token', response.data.token);
    return response.data.user;
  },

  async logout() {
    // await api.post('/auth/logout');
    localStorage.removeItem('token');
  },

  async getCurrentUser() {
    if (this.isAuthenticated()) {
      const response = await api.get('/auth/me');
      return response.data;
    }
    return null;
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  },

  onAuthStateChanged(callback) {
    const checkAuth = () => {
      const user = this.isAuthenticated() ? { email: 'user@example.com' } : null;
      callback(user);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    return () => window.removeEventListener('storage', checkAuth);
  },
};

export default auth;
