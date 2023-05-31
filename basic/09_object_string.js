// 문자형 데이터를 객체로 취급
{
    const str = 'you he she they we he me'
    console.log(str.length)
    console.log(str.charAt(4)) // 인덱스를 입력하면 해당하는 문자를 반환
    console.log(str.indexOf('he')) // 제일 먼저 일치하는 문자의 인덱스 반환
    console.log(str.lastIndexOf('he')) // 뒤에서부터 제일 먼저 일치하는 문자의 인덱스 반환
    console.log(str.lastIndexOf('cat')) // 일치하는 문자열이 없으면 -1 반환
    console.log(str.indexOf('cat')) // 일치하는 문자열이 없으면 -1 반환
    console.log(str.match('he')) // 제일 먼저 찾은 문자를 배열 형태로 반환
    console.log(str.match('cat')) // 불일치 null
    console.log(str.replace('they', 'html')) // 찾고 바꿔서 반환
    console.log(str.search('she')) // 첫글자 인덱스 반환
    console.log(str.slice(4, 10)) // x부터 y앞까지 잘라서 반환
    console.log(str.substring(4, 10)) // x부터 y앞까지 잘라서 반환
}

{//문자를 배열로 만들기
    const str = 'html, css, javascript'
    const result = str.split(',')
    console.log(result)
}

// 대소문자 바꾸기
{
    const str = 'hello'
    const str2 = ' WORLD'
    console.log(str.toUpperCase())
    console.log(str2.toLowerCase())
}

// 문자열 합치기
{
    const str = 'hello'
    const res = str.concat(' world')
    console.log(res)
}

// 맨 앞 공백 없애기
{
    const str = ' hello world'
    const res = str.trim()
    console.log(str)
    console.log(res)
}

// 반문자의 이름을 받아서 대문자로 출력
// 전화번호를 받아서 전화번호 뒷자리 4개를 *로 바꿔서 출력
{
    // const name = prompt('당신의 이름은?', '')
    // const phone = prompt('전화번호는?', '')
    // const upperName = name.toUpperCase()
    // const res = phone.substring(0, phone.length - 4) + '****'
    // document.write(upperName, '<br>')
    // document.write(res, '<br>')
}
