import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Youtube from "react-youtube";

const Player = ({ songs }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [youtubeLink, setYoutubeLink] = useState("");
  // 데이터를 가지고 와서 단 한번만 셋팅한다.
  useEffect(() => {
    const song = songs.find((item) => item.id === parseInt(id));
    if (song) {
      setTitle(song.title);
      setYoutubeLink(song.youtube_link);
    } else {
      alert("자료가 없습니다.");
      navigate("/songs");
    }
  }, []);

  return (
    <div className="modal modal-sheet d-block p-4 py-md-5">
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">{title}</h1>
            <Link to="/songs" type="button" className="btn-close" />
          </div>
          <div className="modal-body py-0 pb-3">
            {/* 유튜브 영상 자리 */}
            <Youtube
              videoId={youtubeLink}
              opts={{ width: "100%", playerVars: { autoplay: 1, mute: 1 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
