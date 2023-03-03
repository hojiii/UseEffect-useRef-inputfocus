import React, {useRef, useEffect, useState } from 'react'

function App() {
  const idRef = useRef("");//연결하고 싶은곳에 ref 선언 후 입력시 속성을 갖고옴
  const pwRef = useRef("");
  //화면이 랜더링 될때, 어떤 작업을 하고 싶다 : UseEffect

  const [text, setText] = useState('');

  
  useEffect(() => {
    idRef.current.focus();
  },[])

  useEffect(() => {
    if(text.length >= 10){
      pwRef.current.focus();
    };
  },[text])//아이디가 바뀔때 마다 체크해줘야함으로 text(id에 입력값)이 들어가야함

  return (
    <>
      <div>
        아이디 : <input value={text} onChange={(event) => {
          setText(event.target.value)}} 
          type="text" ref={idRef} />
      </div>
      <div>
        비밀번호 : <input type = "password" ref = {pwRef}/>
      </div>
    </>
  )
}

export default App










// import {useRef, useState } from 'react';
// import './App.css';



// const style = {
//   border:"1px solid black",
//   margin: "10px",
//   padding: "10px",

// }
// function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);


// const plusStateCountButtonHandler = () => {
//   setCount(count + 1);
// }

// const plusRefCountButtonHandler = () => {
//   countRef.current++;
//   console.log(countRef.current)
// }
// //버튼을 누르면 카운트듣 증가하지만 렌더링은 바로 되지 않는다




  
//   return (
//     <>
//       <div style={style} >
//       state 영역입니다.{count}<br/>
//       <button onClick={plusStateCountButtonHandler}>state 증가</button>
//       </div>
//       <div style={style}>
//         Ref 영역입니다.{countRef.current}<br/>
//         <button onClick={plusRefCountButtonHandler}>ref 증가</button>
//       </div>
//     </>
//   );
// }

// export default App;
