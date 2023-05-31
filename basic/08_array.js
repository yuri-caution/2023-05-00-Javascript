// array 배열
// 1. 배열 만들기
{
    const arr1 = new Array()
    arr1[0] = 10
    arr1[1] = 'hello'
    console.log(arr1)

    const arr2 = [1, 3, 5, 7, 9, '안녕', {}, true]
    console.log(arr2)

    const arr3 = [
        'a',
    { model: 'apple', price: 1000},
    { model: 'galaxy', price: 2000},
    ]

    console.log(arr3)
    console.log(arr2[5])
    console.log(arr3[1].model)
}


// 2. 배열 출력
{
    const books = ['html', 'css', 'javascript']
    console.log(books)
    console.log(books.length) // 3
    console.log(books[0]) // 배열의 첫 요소 반환
    console.log(books[books.length-1]) //항상 배열의 마지막 요소 반환

    // for문
    for(let i=0; i < books.length; i++) {
        console.log(books[i])
    }

    console.log('-----------------')
    
    // for of
    for(let book of books) {
        console.log(book)
    }
    
    console.log('-----------------')
    // for in
    // key는 index 출력
    for(let key in books) {
        console.log(key)
        console.log(books[key])
    }
    
    console.log('-----------------')
    // forEach
    // function 생략하고 화살표 함수 적용
    books.forEach(item=> console.log('📖'+item))
    books.forEach(item=> {
        console.log('📖'+item)
    })

    // map: 새로운 배열을 리턴
    const newItem = books.map(item => `${item} ✨`)
    console.log(newItem)
}

// 3. 배열 method - 함수 형태
{
    const books = ['html', 'css', 'javascript', 'jquery','react']

    // 배열을 문자열로 만들기
    console.log(books.join("/"))
    console.log(books.reverse())
    console.log(books.sort())


    // 뒤에 배열 추가
    books.push('php')
    console.log(books)

    // 앞에 추가
    books.unshift('nodejs')
    console.log(books)
    
    // 뒤에서 삭제
    books.pop()
    console.log(books)
    
    // 앞에서 삭제
    books.shift()
    console.log(books)
    
    // 지정한 위치에 추가, 삭제 splice
    books.splice(2, 1, 'hahaha', 'hohoho')
    // splice(인덱스, 삭제할 개수, 대신 넣을 요소)
    console.log(books)
    
    // 2개의 배열 합치기
    const books2= ['git','nodejs']
    const newBooks = books.concat(books2)
    console.log(newBooks)
    
    // 원하는 구간만큼 잘라서 새로운 배열 반환 slice
    const anotherBooks = newBooks.slice(4, 7)
    console.log(anotherBooks)

    // 검색
    console.log(books)
    console.log(books.indexOf('react'))  // 인덱스 반환
    console.log(books.includes('css'))  // 참, 거짓 반환
}


// 4. 활용
const sojus = [
    {name: '대선', price: 1200, sale: true, score: 86},
    {name: '좋은데이', price: 1100, sale: false, score: 92},
    {name: '진로', price: 1200, sale: true, score: 80},
    {name: '금복주', price: 960, sale: false, score: 60},
    {name: '참이슬', price: 1250, sale: true, score: 46},
]

//score가 80인 소주 찾기
{
    const result = sojus.find(item=> item.score === 80)
    console.log(result)
    console.log(result.name, result.price)
}

// 판매 중인 소주로 새 배열 만들기 filter
{
    const result = sojus.filter(item => item.sale)
    console.log(result)
}

// 점수만 따로 모아서 새로운 배열 만들기
{
    const result = sojus.map(item => item.score)
    console.log(result)
}

// 점수 50 미만인 소주가 있는지 확인하기
{
    const result = sojus.some(item => item.score < 50)
    console.log(result)
}

// 소주들의 평균 가격 구하기
{
    const result = sojus.reduce((prev, current) => {
        return prev + current.price

    }, 0)
    console.log(result / sojus.length)
}

// 점수가 낮은 순으로 정렬해서 문자열로 바꾸기
{
    const result = sojus.map(item => item.score).sort((a, b) => a-b).join()
    console.log(result)
}