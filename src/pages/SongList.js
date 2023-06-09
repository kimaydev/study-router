import React from "react";
import { Link } from "react-router-dom";

const SongList = ({ songs }) => {
  const list = songs.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <Link
          to={`/songs/${item.id}`}
          className="text-decoration-none text-dark"
        >
          {item.title} {item.musician}
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default SongList;
