"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Worker } from './auth'; // Re-using the Worker interface

// Extend Worker interface if needed, for now it's fine.
// export interface Worker extends BaseWorker {
//   password?: string; // Only for creation/update, not stored in client state
// }

export interface Service {
  id: string;
  name: string;
  price: number; // Price in DZD
}

export interface TransactionService {
  serviceId: string;
  name: string;
  price: number; // Price at the time of transaction
}

export interface Transaction {
  id: string;
  workerId: string;
  workerName: string;
  date: string; // YYYY-MM-DD format
  time: string; // HH:MM format
  clientName?: string; // Optional client name
  services: TransactionService[];
  customPrice: number; // Additional custom price
  totalAmount: number;
  isLocked: boolean; // Worker cannot edit if true
  createdAt: number; // Timestamp for creation
  lastModifiedAt: number; // Timestamp for last modification (admin only)
}

interface AppState {
  workers: Worker[];
  services: Service[];
  transactions: Transaction[];
  addWorker: (worker: Omit<Worker, 'id'>) => void;
  editWorker: (workerId: string, updates: Partial<Worker>) => void;
  deleteWorker: (workerId: string) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  editService: (serviceId: string, updates: Partial<Service>) => void;
  deleteService: (serviceId: string) => void;
  addTransaction: (transaction: Omit<Transaction, 'id' | 'totalAmount' | 'isLocked' | 'createdAt' | 'lastModifiedAt'>) => void;
  editTransaction: (transactionId: string, updates: Partial<Transaction>) => void; // Admin only
  _initializeMockData: () => void; // For initial setup
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      workers: [],
      services: [],
      transactions: [],

      addWorker: (worker) => set((state) => ({
        workers: [...state.workers, { ...worker, id: `worker-${Date.now()}` }],
      })),

      editWorker: (workerId, updates) => set((state) => ({
        workers: state.workers.map((w) =>
          w.id === workerId ? { ...w, ...updates } : w
        ),
      })),

      deleteWorker: (workerId) => set((state) => ({
        workers: state.workers.filter((w) => w.id !== workerId),
        // Also remove any transactions associated with this worker
        transactions: state.transactions.filter((t) => t.workerId !== workerId),
      })),

      addService: (service) => set((state) => ({
        services: [...state.services, { ...service, id: `service-${Date.now()}` }],
      })),

      editService: (serviceId, updates) => set((state) => ({
        services: state.services.map((s) =>
          s.id === serviceId ? { ...s, ...updates } : s
        ),
      })),

      deleteService: (serviceId) => set((state) => ({
        services: state.services.filter((s) => s.id !== serviceId),
        // Note: For transactions, we might want to keep the service name/price as it was at the time of transaction
        // So, no direct deletion from transactions here, but future UI should handle display of deleted services gracefully.
      })),

      addTransaction: (newTransactionData) => set((state) => {
        const id = `transaction-${Date.now()}`;
        const createdAt = Date.now();
        const lastModifiedAt = createdAt;

        const totalAmount = newTransactionData.services.reduce((sum, s) => sum + s.price, 0) + newTransactionData.customPrice;

        const newTransaction: Transaction = {
          ...newTransactionData,
          id,
          totalAmount,
          isLocked: true, // Workers cannot edit after saving
          createdAt,
          lastModifiedAt,
        };
        return { transactions: [...state.transactions, newTransaction] };
      }),

      editTransaction: (transactionId, updates) => set((state) => ({
        transactions: state.transactions.map((t) =>
          t.id === transactionId
            ? { ...t, ...updates, lastModifiedAt: Date.now() } // Update timestamp on admin edit
            : t
        ),
      })),

      _initializeMockData: () => {
        const { workers, services } = get();
        if (workers.length === 0 && services.length === 0) {
          const mockWorkers: Worker[] = [
            { id: "worker-admin", username: "admin", full_name: "Admin User", role: "admin", is_active: true },
            { id: "worker-1", username: "worker", full_name: "John Doe", role: "worker", is_active: true, phone: "123-456-7890" },
            { id: "worker-2", username: "jane", full_name: "Jane Smith", role: "worker", is_active: true, phone: "987-654-3210" },
          ];

          const mockServices: Service[] = [
            { id: "service-1", name: "Haircut", price: 1500 },
            { id: "service-2", name: "Beard Trim", price: 800 },
            { id: "service-3", name: "Shave", price: 1000 },
            { id: "service-4", name: "Hair Coloring", price: 5000 },
          ];

          const mockTransactions: Transaction[] = [
            {
              id: "trans-1",
              workerId: "worker-1",
              workerName: "John Doe",
              date: "2023-10-26",
              time: "10:00",
              clientName: "Client A",
              services: [{ serviceId: "service-1", name: "Haircut", price: 1500 }],
              customPrice: 0,
              totalAmount: 1500,
              isLocked: true,
              createdAt: Date.now() - 86400000 * 2, // 2 days ago
              lastModifiedAt: Date.now() - 86400000 * 2,
            },
            {
              id: "trans-2",
              workerId: "worker-1",
              workerName: "John Doe",
              date: "2023-10-26",
              time: "11:30",
              clientName: "Client B",
              services: [
                { serviceId: "service-1", name: "Haircut", price: 1500 },
                { serviceId: "service-2", name: "Beard Trim", price: 800 },
              ],
              customPrice: 200,
              totalAmount: 2500,
              isLocked: true,
              createdAt: Date.now() - 86400000 * 2,
              lastModifiedAt: Date.now() - 86400000 * 2,
            },
            {
              id: "trans-3",
              workerId: "worker-2",
              workerName: "Jane Smith",
              date: "2023-10-27",
              time: "09:00",
              clientName: "Client C",
              services: [{ serviceId: "service-4", name: "Hair Coloring", price: 5000 }],
              customPrice: 0,
              totalAmount: 5000,
              isLocked: true,
              createdAt: Date.now() - 86400000, // 1 day ago
              lastModifiedAt: Date.now() - 86400000,
            },
            {
              id: "trans-4",
              workerId: "worker-1",
              workerName: "John Doe",
              date: new Date().toISOString().slice(0, 10), // Today
              time: "14:00",
              clientName: "Client D",
              services: [{ serviceId: "service-3", name: "Shave", price: 1000 }],
              customPrice: 0,
              totalAmount: 1000,
              isLocked: true,
              createdAt: Date.now(),
              lastModifiedAt: Date.now(),
            },
          ];

          set({ workers: mockWorkers, services: mockServices, transactions: mockTransactions });
        }
      },
    }),
    {
      name: 'hairdresser-shop-storage', // unique name
    }
  )
);