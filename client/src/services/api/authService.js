// authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend API URL

const loginWithGoogle = async () => {
    try {
      console.log('Attempting Google login...');
      const response = await axios.get(`${API_URL}/users/auth/google/callback`);
      console.log('Google login response:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  };
  
export default {
  loginWithGoogle,
};
