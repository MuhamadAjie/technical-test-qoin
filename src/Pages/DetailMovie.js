import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { getDetailMovie } from "../Utils/Api";
import { useNavigate, useParams } from "react-router-dom";

const DetailMovie = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [movieID] = useState(id);
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getDetailMovie(movieID).then((response) => setMovieDetail(response));
  }, [movieID]);

  const handleBack = () => {
    navigate("/");
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  return (
    <div className="container">
      <h1>Detail Movie</h1>
      <img
        src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`}
        alt=""
      />
      <Form {...layout} name="nest-messages">
        <Form.Item label="Title">
          <Input value={movieDetail.title} />
        </Form.Item>
        <Form.Item label="Vote">
          <Input value={movieDetail.vote_average} />
        </Form.Item>
        <Form.Item label="Release Date">
          <Input value={movieDetail.release_date} />
        </Form.Item>
        <Form.Item label="Overview">
          <Input.TextArea
            style={{ height: 200 }}
            value={movieDetail.overview}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            style={{ marginBottom: 30 }}
            type="primary"
            onClick={handleBack}
          >
            Back to Movie List
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetailMovie;
