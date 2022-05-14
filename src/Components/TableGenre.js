import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { getListGenre } from "../Utils/Api";

export const TableGenre = () => {
  const [dataGenre, setDataGenre] = useState([]);

  useEffect(() => {
    getListGenre().then((response) => setDataGenre(response));
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
  ];

  return <Table columns={columns} dataSource={dataGenre} pagination={false} />;
};
