"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle } from "lucide-react";

const AllServicesView = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">All Services</CardTitle>
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Service
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Input placeholder="Search services..." className="max-w-sm" />
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
        </div>
        <div className="border rounded-md p-4 min-h-[200px] flex items-center justify-center text-muted-foreground">
          <p>Service list will appear here.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllServicesView;