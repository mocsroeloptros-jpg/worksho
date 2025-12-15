"use client";

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, worker } = useAuth();

  useEffect(() => {
    if (isAuthenticated && worker) {
      if (worker.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/worker');
      }
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, worker, navigate]);

  return null;
};

export default Index;