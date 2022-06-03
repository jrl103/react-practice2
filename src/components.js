import React from "react";


export const TextArea = ({text}) => {
    return (
        <div style={{
            width:"50vw",
            minHeigh:"20vh",
            border:"1px solid #888"
        }}>
            <pre>{text}</pre>
        </div>
    );
}
export const Input = ({input_ref}) => {
    return (
        <input ref={input_ref}/>
    );
}
export const Button = ({input_ref, setText}) => {
    return (
        <button onClick={() => {
            // console.log(input_ref.current.value)
            // setText(input_ref.current.value); --> Cunstom Hook 할때 value 값 넘기지 않기 위해 삭제하기
            setText(input_ref);
            // input_ref.current.value = ""; --> button 안에 있는 함수 자체를 옮겨버리기. 새 텍스트만 호출하기
        }}>완성</button>
    );
}