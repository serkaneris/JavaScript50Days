const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActiveIndex = 0

next.addEventListener('click', ()=>{

    if(currentActiveIndex===circles.length-1){
        return
    }
    currentActiveIndex++

    updateButton()
    updateCircle()
    
})

prev.addEventListener('click', ()=>{

    if(currentActiveIndex===0){
        console.log('return calisti index 0')
        return
    }
    currentActiveIndex--

    updateButton()
    updateCircle()
    
})


function updateCircle(){
    circles.forEach((circle,index)=>{
        if(index <= currentActiveIndex){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    progress.style.width = (currentActiveIndex / (circles.length -1) * 100) + '%'
}

function updateButton(){

    if(currentActiveIndex === circles.length-1){
        next.disabled = true
    }
    if(currentActiveIndex === circles.length-2){
        next.disabled = false
    }
    if(currentActiveIndex === 1){
        prev.disabled = false
    }
    if(currentActiveIndex === 0){
        prev.disabled = true
    }
}
