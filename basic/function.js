// 1. 함수

// 함수의 선언과 호출
function myFunc() {
    console.log('안녕하세요.')
}

myFunc()

// 매개변수 parameter
function printMessage(message) {
    console.log(message)
}

printMessage('hahahah')
printMessage('hohoho')

// 기본 매개변수
function showInfo(title, name = '스티브 잡스') {
    console.log(`${title} by ${name}`)
}

showInfo('게르리카', '피카소')
showInfo('게르리카')

// 스코프 scope {}
let movie = '하하하'

function printMovie() {
    let myMovie = '생활의 발견'
    console.log(myMovie)
    console.log(movie)
}
printMovie()


// 리턴 return
// 리턴 후 곧장 종료
// 리턴은 보통 생략 상태
// 명시적으로 값을 넘겨줄 때 적음.
function plus(a, b){
    return a+b
}

const result = plus(10, 12)
console.log(result)


const sum = add(5, 15)
console.log(sum)
// 함수가 밑에서 정의됐지만 끌어올려서 적용하여 반환
function add(a, b){
    return a+b
}

const minus = function(a, b){
    return a - b
}
const sum2 = minus(20, 10)
console.log(sum2)

// Arrow 화살표 함수
const minus2 = (a, b) => a - b

const num = minus2(20, 10)
console.log(num)

