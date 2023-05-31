const bg = ['orange', 'lightblue', 'red', 'green', 'yellow', 'lightgreen']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

const bgBtn = document.getElementById('bgBtn')
const color = document.querySelector('.color')
const bgHex = document.getElementById('hexBtn')

console.log(bgBtn)
console.log(color)

bgBtn.addEventListener('click', () => {
    const idx = Math.floor(Math.random() * bg.length)
    document.body.style.backgroundColor = bg[idx]
    color.textContent = bg[idx]
})

hexBtn.addEventListener('click', () => {
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        const idx = Math.floor(Math.random() * hex.length)
        hexColor += hex[idx]
    }
    document.body.style.backgroundColor =hexColor
    color.textContent = hexColor
})