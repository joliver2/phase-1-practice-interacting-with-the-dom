let counterBlock = document.getElementById('counter')
let counterBox = setInterval(timer, 1000)
let counter = 0

function timer() {
    counter++
    let b = parseInt(counterBlock.innerText)
    counterBlock.innerText = b+1
}

let minus = document.querySelector('#minus')
    minus.addEventListener("click", function() {
    let parse = parseInt(counterBlock.innerText)
    counterBlock.innerText = parse-1
})

let plus = document.querySelector('#plus')
plus.addEventListener("click", function() {
    let parse = parseInt(counterBlock.innerText)
    counterBlock.innerText = parse+1    
})

let like = document.querySelector('.likes')
let heart = document.getElementById("heart")
let p = document.createElement('li')
heart.addEventListener('click', function() {
    p.innerText = counterBlock.innerText + " liked"
    like.appendChild(p)
})


let pause = document.getElementById('pause')
pause.addEventListener('click', function() {
    if (pause.innerText === "pause") {
        clearInterval(counterBox);
        pause.innerText = "resume"
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
    }
    else if (pause.innerText === 'resume') {
        pause.innerText = "pause"
        counterBox = setInterval(timer, 1000)
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
    }
})

commentForm = document.getElementById('comment-form')
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let comment = this.children[0],
    text = comment.value;
    comment.value = ""
    let comments = document.querySelector(".comments"),
    p = document.createElement("p");
    p .innerText= text,
    comments.appendChild(p)});

