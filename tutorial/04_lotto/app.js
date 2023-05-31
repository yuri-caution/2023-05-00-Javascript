const btn = document.querySelector('.btn')
const ball = document.querySelectorAll('.numbers li')
const list = document.querySelector('.list')

let count = 0

function addList(lotto){
    console.log(lotto)
    const ul = document.createElement('ul')
    ul.className = 'item'

    for(let i = 0; i < lotto.length; i++){
        const li = document.createElement('li')
        li.innerHTML = lotto[i]
        ul.appendChild(li)
    }
    list.prepend(ul)
}

function paintNumber() {
    let lotto = []
    while(lotto.length < 6 ) {
       let num = Math.floor(Math.random() * 45) + 1
       if(!lotto.includes(num) &&
          !lotto.includes(num +1) &&
          !lotto.includes(num -1)) {
           lotto.push(num)
       }
    }
    ball.forEach((item, i) => {
        // const newLotto = lotto.sort((a,b) => a-b)
        item.innerHTML = lotto[i]
        
    })

    addList(lotto)
}


btn.addEventListener('click', function(){
    if(count >= 10){
        $('.btn').addClass('blind')
        snackbar.createSnackbar('번호 생성은 10개까지 가능합니다.',{
            actions: [
              {
                text: '확인',
                style: {
                  color: 'coral'
                },
                callback(button, snackbar) {

                    snackbar.destroy()
                }
              }
            ]
          })
    } else {
    paintNumber()
    count++}
})