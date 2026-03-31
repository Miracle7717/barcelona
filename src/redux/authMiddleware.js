import { loginSuccess } from './authSlice';

const authMiddleware = (store) => (next) => (action) => {
  // При логине сохраняем токен
  if (action.type === 'auth/login/fulfilled') {
    localStorage.setItem('token', 'mock-token');
    localStorage.setItem('user', JSON.stringify(action.payload));
  }

  // При логауте удаляем токен
  if (action.type === 'auth/logout') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return next(action);
};

// Функция для инициализации аутентификации
export const initializeAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.username) {
      dispatch(loginSuccess(user));
    }
  }
};

export default authMiddleware;