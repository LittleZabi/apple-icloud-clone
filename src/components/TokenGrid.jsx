import { Grid, _ } from "gridjs-react";
import axios from "axios";
import { API_URI } from "../libs/globals";
import { memo, useEffect, useState } from "react";
import { Bin, Eye, EyeSlash, Wrench } from "./bin";

const TokenGrid = memo(({ data }) => {
  const ActionCell = ({ row }) => {
    const handleDelete = async () => {
      const c = confirm(`You want to delete "${row.token}" token!`);
      if (c) {
        await axios
          .get(API_URI + "/admin-delete-token", { params: { id: row._id } })
          .then((e) => {
            alert("successfully deleted!");
            window.location.reload();
          })
          .catch((e) => console.error(e));
      }
    };
    const handleActive = async (id, current_state) => {
      console.log(id, current_state);
      await axios
        .get(API_URI + "/admin-toggle-active-token", {
          params: { id, active: current_state ? 0 : 1 },
        })
        .then((e) => {
          console.log(e.data)
          if (e.data.success) {
            if (
              confirm(
                `Successfully ${
                  current_state ? "disabled" : "enabled"
                } did you want to refresh the page!`
              )
            )
              window.location.reload();
          } else {
            alert(e.data.message);
          }
        })
        .catch((e) => console.error(e));
    };
    const handleEdit = async () => {
      let n = prompt("Edit token name ", row.token);
      n = n.trim();
      if (n !== "" && n !== row.token) {
        await axios
          .get(API_URI + "/admin-edit-token", {
            params: { id: row._id, new_name: n },
          })
          .then((e) => {
            console.log(e.data);
            if (e.data.success) {
              if (
                confirm(
                  "Successfully changed did you want to refresh the page!"
                )
              )
                window.location.reload();
            } else {
              alert(e.data.message);
            }
          })
          .catch((e) => console.error(e));
      }
    };

    return (
      <div style={{ display: "flex" }}>
        <button
          className="item-action-button"
          onClick={() => handleDelete(row)}
        >
          <Bin />
        </button>
        <button
          className="item-action-button wrench"
          onClick={() => handleEdit(row)}
        >
          <Wrench />
        </button>
        {row.active ? (
          <button
            className="item-action-button wrench"
            onClick={() => handleActive(row._id, row.active)}
          >
            <Eye />
          </button>
        ) : (
          <button
            className="item-action-button wrench"
            onClick={() => handleActive(row._id, row.active)}
          >
            <EyeSlash />
          </button>
        )}
      </div>
    );
  };
  const columns = [
    "ID",
    "Token",
    "Visitors",
    "Logged",
    "active",
    "createdAt",
    { name: "Action", formatter: (_id) => _(<ActionCell row={_id} />) },
  ];
  const [readyToRender, setReadyToRender] = useState(false);
  useEffect(() => {
    setReadyToRender(true);
  }, []);
  return (
    <div className="fade-in">
      {readyToRender ? (
        <Grid
          server={{
            url: API_URI + "/admin-get-tokens",
            then: (data) =>
              data.tokens.map((token) => [
                token._id,
                token.token,
                token.visits,
                token.logged,
                token.active ? "Active" : "Disabled",
                new Date(token.createdAt).toDateString(),
                token,
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
      ) : (
        ""
      )}
    </div>
  );
});

export default TokenGrid;
