{
    const today = new Date()
    console.log(today)
    
    const wday = new Date('2022/11/20')
    console.log(wday)
}

{
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const today = `${year}년 ${month+1}월 ${date}일` //month은 0부터 시작하므로 항상 +1 해줄 것
    document.write(today)
}

// 남은 기한 계산하기
{
    //getTime() : 1970년 1월 1일부터 경과된 시간을 밀리세컨드 단위로 표기
    // 현재 날짜부터 특정 날짜부터 며칠 남았는지 구하는 공식
    // 남은 일수(밀리초) = 특정날짜(밀리초) - 현재날짜(밀리초)

    // 1초는 1000 밀리초
    // 1분은 1000 * 60
    // 1시간 1000 * 60 * 60
    // 1일은 1000 * 60 * 60 * 24

    const today = new Date()
    const nowYear = today.getFullYear()
    const endDate = new Date(nowYear, 7, 21)
    const remainDate = endDate.getTime()- today.getTime()
    const result = Math.ceil(remainDate / (1000 * 60 * 60 * 24))
    console.log(`${result}일 남았습니다.`);
}