import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  // console.log(location);
  const state = location.state;
  // console.log(state);

  /*
	// 1. state 값이 없는 경우에 대한 처리
  let fromData = "state의 값이 존재하지 않습니다.";
  if (state) {
    // 2. state에 from의 속성이 있는지 검사
    // state가 true면 state.from의 값을 fromData에 할당
    fromData = state ? state.from : "/";
  }
	*/
  // state가 true면 state.from의 값을 fromData에 할당
  // const fromData = state ? state.from : "";
  // console.log(fromData);
  return (
    <div className="card card-body">
      <div>Home</div>
      {/* <div>이전페이지 : {fromData}</div> */}
    </div>
  );
};

export default Home;
