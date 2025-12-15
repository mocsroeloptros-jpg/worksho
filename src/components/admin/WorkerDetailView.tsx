"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface WorkerDetailViewProps {
  workerId?: string;
}

const WorkerDetailView: React.FC<WorkerDetailViewProps> = ({ workerId }) => {
  // Mock worker data
  const mockWorker = {
    id: workerId || "worker-123",
    full_name: "Jane Doe",
    username: "janedoe",
    role: "worker",
    phone: "555-123-4567",
    is_active: true,
    avatarUrl: "https://github.com/shadcn.png",
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Worker Details</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={mockWorker.avatarUrl} alt={mockWorker.full_name} />
            <AvatarFallback>{mockWorker.full_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{mockWorker.full_name}</h3>
            <p className="text-muted-foreground">@{mockWorker.username} - {mockWorker.role}</p>
          </div>
        </div>
        <div className="grid gap-2">
          <p><strong>Phone:</strong> {mockWorker.phone}</p>
          <p><strong>Status:</strong> {mockWorker.is_active ? "Active" : "Inactive"}</p>
          <p><strong>Services:</strong> Haircut, Coloring, Styling</p>
          <p><strong>Performance:</strong> (Chart/data here)</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkerDetailView;