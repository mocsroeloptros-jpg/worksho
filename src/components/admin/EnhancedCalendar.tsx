"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const EnhancedCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Appointments Calendar</CardTitle>
        <CalendarIcon className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="mt-4 text-center text-muted-foreground">
          <p>Selected Date: {date ? date.toDateString() : "None"}</p>
          <p className="mt-2">Appointment details for the selected day will be displayed here.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedCalendar;