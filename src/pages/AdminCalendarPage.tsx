"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar"; // Assuming you want to use the shadcn calendar here

const AdminCalendarPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="py-10">
        <div className="flex items-center mb-6">
          <Button variant="outline" onClick={() => navigate("/admin")} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
          <h2 className="text-3xl font-semibold">Calendar & Appointments</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          This page will allow administrators to manage appointments and worker schedules.
        </p>

        <div className="bg-card p-6 rounded-lg shadow-sm border min-h-[200px] flex flex-col items-center justify-center text-muted-foreground">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <p className="mt-4">Selected Date: {date ? date.toDateString() : "None"}</p>
          <p className="mt-2">Appointment details for the selected day will be displayed here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCalendarPage;