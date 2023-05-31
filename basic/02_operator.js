// 1. 산술 연산자
{
    // console.log(100 + 10)
    // console.log(100 - 10)
    // console.log(100 * 10)
    // console.log(100 / 10)
    // console.log(100 % 10)
    // console.log(2 ** 5) //제곱
}


// 2. 문자열 연산자
{
    // const say1 = 'winter'
    // const say2 = 'is coming'
    // console.log(`${say1} ${say2}`)
}


// 3. 대입 연산자
{
    let x = 10
    let y = 5
    x = x + y  //15
    // x += y
    console.log(x)
    
    x = x - y // x-= y
    console.log(x)
    
    x = x * y // x *= y
    console.log(x)
    
    x = x / y // x /= y
    console.log(x)
    
    x = x % y // x %= y
    console.log(x)


    // let tbl = '<table border=1>'
    // tbl += '<tr>'
    // tbl += '<td>1</td><td>2</td><td>3</td>'
    // tbl += '</tr>'
    // tbl += '</table>'

    // document.write(tbl)
}


// 4. 증감 연산자
{
    let number = 8
    console.log(number)
    number++ // number = number + 1
    console.log(number)
    number-- // number = number - 1
    console.log(number)
    
    let num1 = 10
    let num2 = ++num1 //증감 후 할당(전의증감)
    console.log(num1, num2)
    
    let count1 = 10
    let count2 = count1++ //할당 후 증감(후의증감)
    console.log(count1, count2)
}


// 5. 비교 연산자
{
    console.log(10 > 20) 
    console.log(10 < 100)
    console.log(10 >= 100)
    console.log(10 <= 100)
    console.log(10 == 100)
    console.log(10 != 100)
}


// 6. 논리 연산자
// || OR, && AND, ! NOT
{
    let a = 100 > 50
    let b = 10 < 5
    let c = true

    // || 하나만 true 이면 true 반환
    console.log(a || b || c)
    
    // && 전부 true 일때만 true 반환
    console.log(a && b && c)

    // !는 값을 반대로 변경
    console.log(a && !b && c)
}


// 7. 동등/일치 연산자
// ==, ===, !=, !==
{
    const value1 = '100'
    const value2 = 100

    console.log(value1 == value2) //true 같다고 판단, 값만 판단할 때.
    console.log(value1 === value2) //false 타입까지 같이 확인. 보다 엄격.
    console.log(value1 != value2) // F
    console.log(value1 !== value2) // T
    console.log(`----------------------------------`)
    console.log(0 == false)
    console.log(0 === false)
    console.log('' == false)
    console.log('' === false)
    console.log(null == undefined)
    console.log(null === undefined)
}


// 8. 삼항연산자
{
    let a = 10
    let b = 15
    
    const result = a > b ? '감사합니다.' : '미안합니다.'
    // 간략한 if문
    console.log(result)
}

// 실습 예시
// 적정체중 : (신장 - 100) * 0.9
{
    const name = prompt('당신의 이름은?')
    const height = prompt('당신의 키는?')
    const weight = prompt('당신의 체중은?')
    const normalWeight = (height - 100) * 0.9
    const result = weight >= normalWeight -5 && weight <= normalWeight +5
    const message = result ? '적정 체중입니다.' : '적정 체중이 아닙니다.'
    document.write(`${name}님은 ${message}`)
    
}