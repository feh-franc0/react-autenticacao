import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
  valiateToken: async (token: string) => {
    // const response = await api.post('/validate', { token });
    // return response.data;
    return {
      user: { id: 3, name: 'José', email: 'jose@gmail.com' },
    }
  },
  signin: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    console.log(response.data.token);
    console.log(response.data.userData);
    return {
      user: response.data.userData,
      token: response.data.token
    };
    // return {
    //   user: { id: 3, name: 'José', email: 'jose@gmail.com' },
    //   token: '123456789'
    // }
  },
  logout: async () => {
    // const response = await api.post('/logout');
    // return response.data;
    return {status: true};
  }
});