"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminReportsPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-10">
        <div className="flex items-center mb-6">
          <Button variant="outline" onClick={() => navigate("/admin")} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
          <h2 className="text-3xl font-semibold">Reports Overview</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          This page will display various administrative reports, such as sales, performance, and booking summaries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for report cards */}
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-2">Sales Report</h3>
            <p className="text-muted-foreground">Detailed breakdown of sales figures.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-2">Worker Performance</h3>
            <p className="text-muted-foreground">Individual worker performance metrics.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-2">Booking Trends</h3>
            <p className="text-muted-foreground">Analysis of appointment booking patterns.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminReportsPage;