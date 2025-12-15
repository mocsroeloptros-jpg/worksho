"use client";

import Layout from "@/components/Layout";
import React from "react";

const Login = () => {
  return (
    <Layout>
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold mb-4">Login Page</h2>
        <p className="text-lg text-muted-foreground">
          This is where users will log in.
        </p>
      </div>
    </Layout>
  );
};

export default Login;