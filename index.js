const addbtn = document.querySelector(".add");
const input = document.querySelector(".inputbox");
const tasklis = document .querySelector(".tasklis");
let x = 0;


addbtn.addEventListener("click",function(){
    let divelm = document.createElement("div");
    x += 1
    divelm.innerHTML = `<p>${input.value} <button id='${x}' class='remove'>-</button></p>`;
    tasklis.appendChild(divelm);
    input.value="";
    $(`#${x}`).click(function(){
        tasklis.removeChild(divelm)
        x-=1
    })
    
})



