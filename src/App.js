import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";

function App() {
  /*
		화면의 내용을 리랜더링 하는 변수 - state
		state 변수 만드는 방법 :
		const [변수명, set변수명] = useState(변수초기값)		
	*/
  // 멤버 정보
  // 객체를 배열로 묶어서 members에 담는다.
  const [members] = useState([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);
  // 노래 정보
  const [songs] = useState([
    {
      id: 1,
      title: "Fallin' for you",
      musician: "Colbie callet",
      youtube_link: "PABUl_EX_hw",
    },
    {
      id: 2,
      title: "Can't hurry love",
      musician: "The supremes",
      youtube_link: "EJDPhjQft04",
    },
    {
      id: 3,
      title: "Landslide",
      musician: "Dixie chicks",
      youtube_link: "V2N7gYom9-A",
    },
    {
      id: 4,
      title: "Can't let go",
      musician: "Linda ronstadt",
      youtube_link: "P-EpGKXmoe4",
    },
    {
      id: 5,
      title: "Doctor my eyes",
      musician: "Jackson Browne",
      youtube_link: "7JlFKS_1oZk",
    },
    {
      id: 6,
      title: "We gotta get you a woman",
      musician: "Todd Rundgren",
      youtube_link: "EyUjbBViAGE",
    },
    {
      id: 7,
      title: "Hip to my heart",
      musician: "Band Perry",
      youtube_link: "vpLCFnD9LFo",
    },
    {
      id: 8,
      title: "Rolling in the deep",
      musician: "Adele",
      youtube_link: "EvK8pDK6IQU",
    },
  ]);

  return (
    <>
      {/* 화면에 공통적으로 출력되는 컴포넌트 */}
      <Header />
      <div className="container mt-4">
        {/* Routes : 주소가 입력되면 나오는 화면 */}
        <Routes>
          {/* <Route path="개발자가 설정한 URI를 작성"/> */}
          {/* <Route element={보여줄 컴포넌트 엘리먼트를 작성}/> */}
          {/* <Route path="/"/> 첫 페이지 주소 */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="" element={<컴포넌트 속성명="값"/>} /> */}
          <Route path="/about" element={<About title="인디밴드" />} />
          <Route path="/members" element={<Members members={members} />} />
          {/* neste Route */}
          <Route path="/songs" element={<SongList songs={songs} />}>
            {/* 중첩된 route index props */}
            <Route index element={<PlayerIndex />} />
            {/* 웹브라우저 주소: /songs/1 URL Parameter 리턴 */}
            {/* <Route path=":id" element={<SongDetail songs={songs} />} /> */}
            <Route path=":id" element={<Player />} />
          </Route>
          {/* // neste Route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
