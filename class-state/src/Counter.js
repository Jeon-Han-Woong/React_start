import React, {Component} from 'react';

class Counter extends Component {
    // 내부적으로 상태가 변하는 변수는
    // this.state로 생성자쪽에서 선언.
    constructor(props) {
        super(props);
        this.state = {
            // this.state.number 값이 0으로 시작하며
            // 이후 상황에 따라 값이 변함.
            number : 0,
            number2 : 0
        };
    }
    
    render() {
        // state를 조회할 때는 this.state로 조회함
        const {number, number2} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h1>{number2}</h1>
                <button
                // onClick을 통해 이벤트 연결 
                onClick={() => {
                    // this.setState를 사용해 state에
                    // setter처럼 값을 갱신시킴.
                    // 불변성 원칙을 지키기 위해서
                    // 기존 state를 스프레드 문법으로
                    // 펼쳐서 저장한 다음
                    // 갱신할 변수값만 추가로 갱신선언
                    this.setState({
                        ...this.state, number:number+1,
                    });
                }}
                >
                    +1
                </button>
                <button
                // onClick을 통해 이벤트 연결 
                onClick={() => {
                    // this.setState를 사용해 state에
                    // setter처럼 값을 갱신시킴.
                    // 뒤에 값을 적용시키므로 {number:0, number2:0, number2:number+2} 에서
                    // {number:0, number2:number+2} 처럼 작동함
                    this.setState({
                        ...this.state, number2:number2+2
                    });
                }}
                >
                    +2
                </button>
            </div>
        );
    }
}

export default Counter;