// src/lib/exportExcel.ts
import { showSuccess, showError } from "@/utils/toast";

interface ExportDataOptions {
  filename?: string;
  headers?: string[];
}

export const exportToCSV = <T extends Record<string, any>>(
  data: T[],
  options?: ExportDataOptions
) => {
  if (!data || data.length === 0) {
    showError("No data to export.");
    return;
  }

  const filename = options?.filename || "export.csv";
  const headers = options?.headers || Object.keys(data[0]);

  const csvRows = [];
  csvRows.push(headers.join(',')); // Add headers

  for (const row of data) {
    const values = headers.map(header => {
      const value = row[header];
      // Handle commas and quotes in values
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csvRows.push(values.join(','));
  }

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showSuccess(`Successfully exported ${data.length} records to ${filename}`);
  } else {
    showError("Your browser does not support downloading files directly.");
  }
};