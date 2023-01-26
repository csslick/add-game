import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  // 2.상태변수
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [val, setVal] = useState("");

  // 3. 랜덤 번호 생성
  const genNum = () => {
    let n1 = Math.floor(Math.random() * 99);
    let n2 = Math.floor(Math.random() * 9);
    setNum1(n1);
    setNum2(n2);
  };

  // 5. 정답확인
  const passCheck = () => {
    if (num1 + num2 === Number(val)) {
      alert("정답");
    } else {
      alert("오답");
    }
    setVal(""); // 빈값 초기화
  };

  // 4. 앱 실행 시 첫번째 문제 생성
  useEffect(() => {
    genNum();
  }, []);

  return (
    // 1.UI
    <div className="container text-center mt-5">
      <h1 className="display-3">더하기 게임</h1>
      <div className="numBox">
        <div className="num">{num1}</div>
        <span className="calcText">+</span>
        <div className="num">{num2}</div>
        <span className="calcText">=</span>
        <input
          className="result"
          type="text"
          placeholder="입력"
          maxLength="3"
          size="3"
          value={val}
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1");
            console.log(e.target.value);
            setVal(e.target.value);
          }}
        />
      </div>

      <button
        className="btn btn-primary mt-4"
        onClick={() => {
          passCheck(); // 정답채크(무입력도 오답)
          genNum(); // 다음 문제
        }}
      >
        확인
      </button>
      {num1 + num2}
    </div>
  );
}
