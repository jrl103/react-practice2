import React from "react";

const useCompletes = (initial = "") => {
    // --> 파라미터로 initial 이라는 걸 가지고 올 건데
    //     만약 안 넘겨주면 그냥 일단 ""을 할당해라 ! 라는 뜻
    //  = 초기값을 아예 받아오는 것
    //      --> 밑에 useState("") or initial = "" 둘 중 하나 사용하면 됨


    // Custom Hook은 컴포넌트의 최상위에서만 호출 가능
    // = 라액트 함수에서만 호출 가능
    // = Custom Hook에서 Custom Hook을 또 호출할 수 있음

    // -----해야할 일 -----
    // ref 값 가져온 걸로,
    // state를 바꿔주자!


    // ---1. state를 갖고 있기 
    const [text, setText] = React.useState(initial); 


    // ---2. state를 바꿔 주기
    const changeText = (_ref) => {
        // ref 값 가지고 온 걸로 바꿔줄 거니까, ref 값 받아오기

        // console.log(_ref);
        // ref를 원했는데 그냥 텍스트값(valye)이 들어와버려서 에러남.
        // --> _ref 를 호출하는 곳에 가보기
        


        // -----------ref의 current의 value를 찾을 수 없을 때마다
        // 에러가 나는 것을 방지해주기 위해 if문 쓰기 -------------
        const value = _ref.current?.value;
        //                     ? : 옵셔널 체이닝
        //                       : 뒤에 있는 것이 있으면 가져오고,
        //                       : 없으면 그냥 에러 내지 않고 undefined 하게함
        // 삼항연산자 --> const value = _ref.current.value? _ref.current.value : "";
        
        
        if(value && value !== ""){
        //           아무것도 없으면 안되도록 조건 추가

        // setText(_ref.current.value); --> 위에서 따로 선언해서 주석
        setText(value);


        // input_ref.current.value = "";
        _ref.current.value = "";
        // component의 Button 함수에 있던 것을 옮겨옴 --> input 지우기

        }
    

    }
    // ---3. 1번과 2번 리턴해주기
    return[text, changeText];


    // ---4. 이제부터 useCompletes 라는 Hook을 호출하게 되면,
    //       text 값과 text를 변경하기 위한 함수 2개(리턴값)를 받아가는 것 !

    // ---> App.js에서 불러야 함.
    //     이유 : Custom Hook에서 지금 State를 만들었지만, 전역 state가 아니기 때문 !
    //           = 안에서 useState를 쓴다고 전역 관리 값이 되는게 아님

    //           so, App이 아닌 Button에서 사용하게 되면,
    //               Button 컴포넌트에 이 state가 달리게 됨
    //            ---> 그렇게 되면 다른 컴포넌트들과 상태 공유하기 힘들어짐. 
}

export default useCompletes;