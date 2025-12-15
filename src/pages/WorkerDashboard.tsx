"use client";

import Layout from "@/components/Layout";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Briefcase, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

const WorkerDashboard = () => {
  const { worker, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/login");
  };

  return (
    <Layout>
      <div className="py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Worker Dashboard</h2>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome, {worker?.full_name || "Worker"}! Here's an overview of your schedule and services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> My Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">View your upcoming appointments and availability.</p>
              <Button className="mt-4 w-full">View Schedule</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" /> My Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Manage the services you offer and their details.</p>
              <Button className="mt-4 w-full">Manage Services</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" /> My Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Track your earnings and performance metrics.</p>
              <Button className="mt-4 w-full">View Earnings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WorkerDashboard;