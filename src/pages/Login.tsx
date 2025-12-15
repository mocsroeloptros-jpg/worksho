"use client";

import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";
import { useAppStore } from "@/lib/store"; // Import the new store
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAuth();
  const { workers, _initializeMockData } = useAppStore(); // Get workers and initializer from store
  const navigate = useNavigate();

  useEffect(() => {
    _initializeMockData(); // Initialize mock data when component mounts
  }, [_initializeMockData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find worker in the store
    const foundWorker = workers.find(w => w.username === username);

    // Mock password check (in a real app, this would be hashed and checked against a backend)
    if (foundWorker && password === "password") { // Assuming "password" is the universal mock password
      login(foundWorker);
      showSuccess(`Logged in as ${foundWorker.full_name}!`);
      if (foundWorker.role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/worker");
      }
    } else {
      showError("Invalid credentials.");
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Enter your username and password to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="admin or worker"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;