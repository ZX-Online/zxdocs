import { useState } from 'react';

export default function useAuth() {
  const getAuth = () => {

    const userAuth = localStorage.getItem('auth');
    return userAuth

  };

  const [auth, setAuth] = useState(getAuth());

  const saveAuth = userAuth => {
    localStorage.setItem('auth', userAuth);
    setAuth(userAuth);
  };

  return {
    setAuth: saveAuth,
    auth
  }
}
