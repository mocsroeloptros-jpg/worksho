"use client";

import Layout from "@/components/Layout";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock login for demonstration. In a real app, you'd call an API.
    if (username === "admin" && password === "password") {
      login({ id: "1", username: "admin", full_name: "Admin User", role: "admin", is_active: true });
      showSuccess("Logged in as Admin!");
      navigate("/admin");
    } else if (username === "worker" && password === "password") {
      login({ id: "2", username: "worker", full_name: "Worker User", role: "worker", is_active: true });
      showSuccess("Logged in as Worker!");
      navigate("/worker");
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