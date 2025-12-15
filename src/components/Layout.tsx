"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Awesome App</h1>
          {/* You can add navigation or other header elements here */}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Layout;