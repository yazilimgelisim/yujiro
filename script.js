const img = document.getElementById('image')
const buttons = document.querySelectorAll('button')

var speed = 10

animation=(x, y, r, c, m)=>{
    m = Math.random()
    if(m<=0.5)
    m = 1
    else 
    m = -1

    x = Math.floor(Math.random()*15*m)

    m = Math.random()
    if(m<=0.5)
    m = 1
    else 
    m = -1

    y = Math.floor(Math.random()*15*m)

    r = Math.floor(Math.random()*30)

    c = 'rgb('+Math.floor(Math.random()*249)+1+', '+Math.floor(Math.random()*249)+1+', '+Math.floor(Math.random()*249)+1+')'
    img.style.filter = "drop-shadow("+x+"px "+2+"px "+18+"px "+c+")"
    img.style.opacity = Math.random()
}
var repeat = setInterval(animation, 1000/speed)


buttons.forEach((item)=>
{
    item.addEventListener('click',()=>{
        for(let i = 0; i<buttons.length; i++){
            buttons[i].style.backgroundColor = 'orange'
        }
        item.style.backgroundColor = 'red'
        if(item.innerHTML=='X'){
            clearInterval(repeat)
            speed = 10
            repeat = setInterval(animation, 1000/speed)
        }
        else if(item.innerHTML=='3X'){
            clearInterval(repeat)
            speed = 30
            repeat = setInterval(animation, 1000/speed)
        }
        else if(item.innerHTML=='5X'){
            clearInterval(repeat)
            speed = 60
            repeat = setInterval(animation, 1000/speed)
        }
    })
})
