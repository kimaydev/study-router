import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const About = ({ title }) => {
  // 웹브라우저의 router를 강제로 변경하려면 useNavigate()를 활용
  const navigate = useNavigate();
  /* 
		쿼리문자열 활용에는 두가지 방법이 있다
		- useSearchParams
		- useLocation
	*/
  const location = useLocation();
  // console.log("가수이름", location.state);
  // console.log("주소창 객체", location.pathname);
  // console.log("주소창 객체", location.search);
  // console.log("주소창 객체", location.hash);

  // useLocation은 window.location 객체와 같다.
  // useSearchParams()를 이용하면 수월하게 쿼리를 추출할 수 있다.
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("total"));
  // 현재 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 문자열을 숫자로 변환
    const strPage = parseInt(searchParams.get("page"));
    // console.log(typeof strPage);
    // NaN === NaN은 false이기 때문에
    // isNaN(값) : NaN인지 아닌지 검사하는 방법을 사용할 것
    // isNaN(값)의 결과가 true라면 값은 숫자가 아니다
    // isNaN(값)의 결과가 false라면 값은 숫자이다
    setPage(!isNaN(strPage) ? strPage : 1);
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      // 웹브라우저의 쿼리 스트링을 변경
      // window.location.pathname -> http://localhost:3000/about
      navigate(window.location.pathname + `?page=${page - 1}&total=5`);
    }
  };
  const goNext = () => {
    navigate(window.location.pathname + `?page=${page + 1}&total=5`);
  };
  /*
	const goNaver = () => {
    // 윈도우 강제로 이동하기
    // window.location = "http://www.naver.com";
    // 새 탭으로 오픈됨
    window.open("http://www.naver.com");
    // 아래처럼 전달하면 쿼리스트링에 URL이 붙는다.
    // navigate("http://www.naver.com");
  };
  const goHome = () => {
    navigate("/", { state: { from: "/about", age: 20 } });
  };
	*/

  return (
    <div className="card card-body">
      <div>About{title}</div>
      <div>
        <div className="m-2"> 현재 페이지 : {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
        {/* <button className="btn btn-danger m-1" onClick={goNaver}>
          네이버 바로가기
        </button>
        <button className="btn btn-danger m-1" onClick={goHome}>
          홈 바로가기
        </button> */}
      </div>
    </div>
  );
};

export default About;
