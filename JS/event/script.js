let demo=document.querySelector("#btn")
demo.onclick = (e)=>{
   //  console.log("click me 1 times")
   console.log(e)
   console.log(e.type)
   console.log(e.target)
}

let demo2=document.querySelector("#btn1")
demo2.ondbclick=(evt)=>{
    //console.log("btn was  clicked 2 times")
    console.log(evt.type)
    console.log(evt.target)
}

let test=document.querySelector("#para")
test.onmouseover = (nit)=>{
    //console.log("i am inside the box")
    console.log(nit.type)
    console.log(nit.target)
}

