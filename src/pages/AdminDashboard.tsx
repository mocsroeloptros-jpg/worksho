"use client";

import Layout from "@/components/Layout";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/login");
  };

  const handleGoToReports = () => {
    navigate("/admin/reports");
  };

  const handleGoToWorkers = () => {
    navigate("/admin/workers");
  };

  const handleGoToServices = () => {
    navigate("/admin/services");
  };

  const handleGoToCalendar = () => {
    navigate("/admin/calendar");
  };

  const handleGoToSettings = () => {
    navigate("/admin/settings");
  };

  return (
    <Layout>
      <div className="py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Admin Dashboard</h2>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to the administrative control panel. Here you can manage workers, services, and view reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Workers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">View, add, edit, and remove worker accounts.</p>
              <Button className="mt-4 w-full" onClick={handleGoToWorkers}>Go to Workers</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Define and update salon services and pricing.</p>
              <Button className="mt-4 w-full" onClick={handleGoToServices}>Go to Services</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>View Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Access sales, performance, and booking reports.</p>
              <Button className="mt-4 w-full" onClick={handleGoToReports}>Go to Reports</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar & Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Manage appointments and worker schedules.</p>
              <Button className="mt-4 w-full" onClick={handleGoToCalendar}>Go to Calendar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Configure application settings and preferences.</p>
              <Button className="mt-4 w-full" onClick={handleGoToSettings}>Go to Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;