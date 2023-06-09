import React from "react";
import { Link, Outlet } from "react-router-dom";

const SongList = ({ songs }) => {
  const list = songs.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <Link
          to={`/songs/${item.id}`}
          className="text-decoration-none text-dark"
        >
          {item.title} {item.musician}
          {/* font-awsome */}
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
      {/* 중첩된 Route 표현 : context 활용 */}
      {/* 중첩된 Route에서는 Outlet에 props를 전달함으로서 중복된 props 사용을 방지할 수 있다. */}
      <Outlet context={{ songs }} />
    </div>
  );
};

export default SongList;
