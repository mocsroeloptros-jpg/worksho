import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Worker {
  id: string;
  username: string;
  full_name: string;
  role: 'admin' | 'worker';
  phone?: string;
  is_active: boolean;
}

interface AuthState {
  worker: Worker | null;
  isAuthenticated: boolean;
  login: (worker: Worker) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      worker: null,
      isAuthenticated: false,
      login: (worker) => set({ worker, isAuthenticated: true }),
      logout: () => set({ worker: null, isAuthenticated: false }),
    }),
    {
      name: 'salon-auth',
    }
  )
);