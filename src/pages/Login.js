import React from "react";
import { useState, useEffect } from "react";
import { redirect } from "react-router";
import "../styles/Login.css";

const User = {
  email: "test@example.com",
  pw: "test2323@@@",
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.emaol && pw === User.pw) {
      alert("로그인에 성공");
    } else {
      alert("등록 안됨");
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>
      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {
            //앞의 두가지 조건을 만족할 때만 에러를 띄움
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력하세요 </div>
            )
          }
        </div>
        <div className="inputTitle" style={{ marginTop: "26px" }}>
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문 숫자 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePassword}
          />
        </div>
        <div className="errorMessageWrap">
          {" "}
          {
            //앞의 두가지 조건을 만족할 때만 에러를 띄움
            !pwValid && pw.length > 0 && (
              <div> 영문 숫자 특수문자 포함 8자 이상 입력해주세요 </div>
            )
          }
        </div>
      </div>
      <div>
        <button
          onClick={onClickConfirmButton}
          className="bottomButton"
          disabled={notAllow}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Login;
