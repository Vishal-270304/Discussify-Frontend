// AuthGuard.tsx
import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const verificationToken = localStorage.getItem('token');

    if (!verificationToken) {
      navigate('/signup');
    }else{
      navigate("/home")
    }
  }, [navigate]);

  // Render children only if authenticated
  return <>{localStorage.getItem('token') ? children : null}</>;
};

export default AuthGuard;
