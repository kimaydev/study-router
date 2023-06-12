import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
  // 페이지이동 Hook
  const navigate = useNavigate();
  // 주소표시줄에 기재된 URL에 전달된 parameter를 파악
  /* 
		주소표시줄에 표현되는 형식에는 2가지가 있음
		- parameter 형식 : /songs/1
		- query String 형식 : /songs?id=1&title=타이틀명
	*/
  const { id } = useParams();
  // id와 같은 1개의 객체를 songs에서 추출해서 state를 사용해 화면을 갱신한다.
  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  // 컴포넌트가 마운트 되기 전에 한번만 처리한다.
  // 데이터 로딩 및 처리
  useEffect(() => {
    // id를 이용해서 데이터에서 검색한 결과를 출력한다.
    // Array.find는 조건이 true인 요소를 리턴한다.
    // Array.find는 여러개가 true일때도 첫 true만 리턴한다.
    // URL Parameter는 무조건 문자열이기 때문에 숫자타입으로 변경해주어야 한다.
    // 목록의 id 속성과 params로 전달된 id가 같다면 ture
    const song = songs.find((item) => item.id === parseInt(id));
    // 검색이 되지 않을 경우를 위한 처리
    if (song) {
      // song.title이 true이면 song.title 값을 반환하고, false이면 빈 문자열 반환
      setTitle(song.title ? song.title : "");
      setMusician(song.musician ? song.musician : "");
      setLink(
        song.youtube_link
          ? `https://m.youtube.com/watch?v=${song.youtube_link}`
          : ""
      );
    } else {
      // 자료가 없으면 안내창이 뜨면서 /songs으로 이동한다.
      alert("자료가 없습니다.");
      navigate("/songs");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        {/* 유튜브 보여주기 */}
        <a href={link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/songs">목록으로 돌아가기</Link>
    </div>
  );
};

export default SongDetail;
