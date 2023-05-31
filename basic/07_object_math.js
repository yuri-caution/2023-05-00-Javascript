{
    console.log(Math)

    const sum = 9.4
    const sum2 = '12.12463'

    console.log(Math.round(sum)) // 반올림
    console.log(Math.ceil(sum)) // 올림
    console.log(Math.floor(sum)) // 내림
    console.log(Math.pow(2, 4)) // 거듭제곱
    console.log(parseInt(sum2)) // numeric (정수만)
    console.log(Number(sum2)) // numeric
}

{
    // random number
    const num = Math.random() // 0 ~ 1 사이의 수 출력
    console.log(Math.floor(num * 10)) // 정수만 남기고 버림, 0 ~ 9 사이의 수 출력
    console.log(Math.floor(num * 10) + 1) // 정수만 남기고 버림, 1 ~ 10 사이의 수 출력

    // 배열에서 랜덤 출력
    const food = ['라면', '김밥', '우동', '칼국수', '햄버거'] //0부터 인덱스
    const randomNum = Math.floor(Math.random() * food.length)
    console.log(randomNum)
    document.write(food[randomNum])
}