import React, { useState, useEffect } from "react";
import { getListMovie } from "../Utils/Api";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

export const TableMovie = () => {
  let navigate = useNavigate();
  const [dataMovie, setDataMovie] = useState([]);

  const handleDetail = (id) => {
    navigate(`/detailMovie/${id}`);
  };

  useEffect(() => {
    getListMovie().then((response) => setDataMovie(response));
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "number",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Release Date",
      dataIndex: "release",
      key: "key",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "key",
      render: (payload) => (
        <button onClick={() => handleDetail(payload)}>Detail</button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataMovie} />;
};
