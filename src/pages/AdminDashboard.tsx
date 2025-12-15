"use client";

import Layout from "@/components/Layout";
import React from "react";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>
        <p className="text-lg text-muted-foreground">
          This is the administrative control panel.
        </p>
      </div>
    </Layout>
  );
};

export default AdminDashboard;