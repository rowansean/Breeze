"use client";

import DynamicSearch from "@/components/DynamicSearch";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="flex flex-col gap-5">
      <Header>
        <DynamicSearch />
      </Header>
      <Card>
        <CardHeader>Results...</CardHeader>
        <CardContent>
          {searchResults.length ? (
            searchResults.map((result: any) => (
              <div key={result.id}>
                <CardTitle>{result.title}</CardTitle>
                <p>{result.description}</p>
              </div>
            ))
          ) : (
            <p className="text-sm font-light text-black opacity-40">
              No results found...
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
