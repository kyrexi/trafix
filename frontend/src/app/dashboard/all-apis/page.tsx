import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./api-table-columns";
import { auth } from "@/auth";
import { fetchUserApis } from "@/lib/data";
import { BackgroundStyle } from "@/components/effects/background-style";

export const metadata = {
  title: "All APIs | Apilux",
};

type Props = {};

export default async function page({}: Props) {
  // Authenticate the user and get the session
  const session = await auth();

  // Function to fetch and format customer data
  async function getData() {
    const response = session?.user?.id
      ? await fetchUserApis()
      : [];


    const formattedData = response.map(
      (api: {
        ID: string;
        UserID: string;
        Name: string;
        Method: string;
        URL: string;
        Headers: string;
        Payload: string;
        Description: string;
        CreatedAt: string;
        UpdatedAt: string;
      }) => ({
        id: api.ID,
        user_id: api.UserID,
        name: api.Name,
        method: api.Method,
        url: api.URL,
        headers: api.Headers,
        payload: api.Payload,
        description: api.Description,
        createdAt: api.CreatedAt,
        updatedAt: api.UpdatedAt,
      })
    );

    return formattedData;
  }

  // Fetch the data
  const data = await getData();
  return (
    <div className="overflow-hidden">
      <BackgroundStyle />
      <DataTable
        columns={columns}
        data={data}
        addNewLink="/dashboard/workspace/"
        addNewText="Add new API"
      />
    </div>
  );
}
