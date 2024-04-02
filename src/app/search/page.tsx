import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-5">
      <Header>
        <h1 className="text-4xl drop-shadow-md">Search</h1>
      </Header>
      <Card>
        <CardHeader>Results...</CardHeader>
        <CardContent>
          <CardTitle>Search Results</CardTitle>
          <p>Search results will be displayed here...</p>
        </CardContent>
      </Card>
    </div>
  );
}
