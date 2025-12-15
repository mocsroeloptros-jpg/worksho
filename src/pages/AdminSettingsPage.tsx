"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminSettingsPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-10">
        <div className="flex items-center mb-6">
          <Button variant="outline" onClick={() => navigate("/admin")} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
          <h2 className="text-3xl font-semibold">Application Settings</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          This page will allow administrators to configure application settings and preferences.
        </p>

        <div className="bg-card p-6 rounded-lg shadow-sm border min-h-[200px] flex items-center justify-center text-muted-foreground">
          <p>Settings configuration options will be displayed here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminSettingsPage;