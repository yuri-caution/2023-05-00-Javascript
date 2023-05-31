// Variable 변수
// 변수 선언과 값 할당
var title = 'html'
var age = 32

console.log(age, title)

// 변수 선언 var, let, const


// 1. var 특징
// 읽기와 쓰기가 모두 가능. 블록을 무시함

{
    var userName = "Alice"
    userName = '홍길동'
    console.log(userName)

}

console.log(userName)


// 2. let
// 읽기 쓰기 가능
{
    let title = 'html'
    title = 'css'
    console.log(title)
}


// 3. const
// 읽기만 가능, 변하지 않음
{
    const title = 'javascript'
    console.log(title)
}

//주로 let, const 사용하는 편
// jquery 에서는 var도 곧잘 사용

//4. 변수의 데이터 타입 - 자료형
// 원시데이터 : String, number, boolean, null, undefined
// null    const title = ''
// undefined    const title 

// 숫자형 number 연산 가능!
{
    const num = 10
    const PI = 3.14

    const a = 10
    const b = 5

    console.log(a, b)
    console.log(a + b)
    console.log(a * b)
    console.log(a - b)
    console.log(a / b)
    console.log(a % b)
}

{
    const a = 1 / 0
    const b = -1 / 0
    const c = 'html' / 10
    console.log(a)
    console.log(b)
    console.log(c)
}

// NaN 의미 Not a Number


// 문자형 string
{
    const name1 = "Alice"
    // 문장 끝, 줄바꿈 의미 >> ; << 생략 가능함.
    const name2 = "alice"

    const firstName = "John"
    const lastName = "Snow"
    const fullName = firstName + " " + lastName
    console.log(fullName)
    // 문자열 연산 + 만 가능
    console.log(`${firstName} ${lastName}`)
    // 백틱 `` 문자열 표시에 사용
}


// 불린 boolean
{
    const a = true
    const b = false

    const name = "Alice"
    const age = 16

    console.log(name == "Alice")
    console.log(age > 20)

    if(age > 20){
        console.log('입장!')
    } else {
        console.log('퇴장!')
    }
}


// NULL 존재하지 않는 값, 비어있는 값
{
    const a = null
    console.log(`값은 ${a}이고 타입은 ${typeof a}입니다.`)
}


// undefined 값이 할당되지 않음
{
    let winter
    console.log(`값은 ${winter}이고 타입은 ${typeof winter}입니다`)
}


// 5. 대화상자
// alert, prompt, confirm
{
    // 입력창, (, 입력창 초기값)
    // 사용자 입력값
    const name = prompt('이름을 입력하세요', '영업팀')
    alert(`안녕하세요. ${name}님, 환영합니다.`)
    console.log(name)
    // window 생략상태
    const isCheck = window.confirm('확인하셨습니까?')
    // console.log(isCheck)
}

// 6. 형 변환
{ 
    const mathScore = prompt('수학 점수는?')
    const engScore = prompt('영어 점수는?')
    const score = (Number(mathScore) + Number(engScore)) / 2
    alert(score)
}
// 오류 날 가능성 높음.


{
    console.log(
        String(1234),
        String(true),
        String(null),
        String(undefined),

    )

    console.log(
        Number('1234'),
        Number('1234hello'),
        Number(true), //1
        Number(false), //0
        Number(null), //0
        Number(undefined), //NaN

    )

    console.log(
        Boolean(0),
        Boolean('0'), //T
        Boolean(''),
        Boolean(' '), //T
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN),
    )
}