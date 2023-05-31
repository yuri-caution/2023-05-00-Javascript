// object 객체
// Javascirpt는 객체 기반 언어
// 객체는 속성과 기능을 가진다.
// 속성 - property
// 기능 - method
// { 키:값, 키2:값2, 키3:값3 }

const user = {
    name: 'Picaso',
    age : 28,
    email: 'picaso@gmail.com',
    works: [
        { id: 1, title: '게르니카', price: 10000, like: 50},
        { id: 2, title: '아비뇽의 쳐녀들', price: 30000, like: 80},
        { id: 3, title: '우는 여인', price: 50000, like: 200}
    ], //객체 안에 객체도 가능
    // login :function(){
    //     console.log('피카소가 로그인 하였습니다.')
    // },
    login(){
        console.log('피카소가 로그인 하였습니다.')
    },
    logout(){
        console.log('퇴장하였습니다.')
    },
    //객체의 함수를 method라고 부르는 것
    //기능이라는 점에서 함수와 method 유사함. 혼동하기도.

    goodWorks(){
        console.log('피카소의 대표작')
        // 반복문
        this.works.forEach(work => {
            console.log(`${work.id}, ${work.title}, ${work.price}원, 좋아요(${work.like})`)
        }) // this 는 user
    }
}

console.log(user.name)
console.log(user.login)

// object 수정
user.age = 52
console.log(user.age)

// object 타입 확인하기
console.log(typeof user)
//내장객체 //method
user.login()
user.logout()
user.goodWorks()