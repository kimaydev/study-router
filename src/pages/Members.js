import React from "react";
import { useNavigate } from "react-router-dom";

/*
	리액트 컴포넌트에서 이미지 소스 불러오는 방법
	1. src : 각각의 이미지를 import한 다음 이미지 태그의 src 속성에 적용
		예) import gogo from "./img/aaa.jpg";
				<img src={gogo}/>
		-> image가 많아질수록 import가 늘어난다.
	2. public 폴더 사용(public 폴더 안쪽에 이미지를 업로드)
	2-1. process.env.PUBLIC_URL 구문 사용
	2-2. public 폴더 절대경로를 구해서 직접 출력
*/

const Members = ({ members }) => {
  // URI 경로를 이동할 수 있는 Hook
  const navigate = useNavigate();
  // 사용법 : navigate(경로, 옵션)
  const goHome = () => {
    // parameter, 쿼리스트링 말고 navigate를 이용해서 정보를 전달하고자 함
    // state 옵션에 여러 값을 전달하고 싶다면 객체를 정의해서 전달해준다.
    // navigate("/", { state: { from: "/members", age: 30 } });
    navigate("/");
  };

  /*
	location의 state 활용하기
	const showInfo = (_who, _img) => {
    navigate("/about", { state: { singer: _who, photo: _img } });
  };
	*/

  const path = process.env.PUBLIC_URL;
  const imgStyle = {
    width: 90,
    height: 80,
  };
  const list = members.map((item, index) => {
    return (
      // JSX에서는 반복문 사용 시 key(unique id) 있어야 한다.
      <div key={index} className="col-6 col-md-4 col-lg-3">
        <img
          src={`${path}/${item.photo}`}
          alt={item.name}
          className="img-thumbnail"
          style={imgStyle}
          // onClick={() => showInfo(item.name, item.photo)}
          // 매개변수에 무언가를 전달할때는 반드시 화살표 함수로 감싸야 한다.
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
    // JSX를 반환한다.
  });
  // members의 요소로 새로운 배열을 생성한다. (Array.map();)

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>

      <button className="btn btn-secondary" onClick={goHome}>
        Home
      </button>
    </div>
  );
};

export default Members;
