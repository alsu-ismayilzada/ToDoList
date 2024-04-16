let logo = document.querySelector(".logo");
let sort = document.querySelector(".sort");

sort.addEventListener('mouseover', () => {
    console.log(logo.src);
    if(logo.src.includes("icon_gray_decrease.svg")){
   logo.src="./image/icon_black_decrease.svg"
  }else if(logo.src.includes("icon_gray_increase.svg")){
    logo.src="./image/icon_black_increase.svg"
}
  });
sort.addEventListener('mouseleave', () => {
    if(logo.src.includes("icon_black_decrease.svg")){
    logo.src="./image/icon_gray_decrease.svg"
}else if(logo.src.includes("icon_black_increase.svg")){
    logo.src="./image/icon_gray_increase.svg"
}
   });

  sort.addEventListener("click",()=>{
  let li = document.querySelectorAll("li");
      let arr = [];
      li.forEach((item)=>{
        arr.push(item.innerHTML);
        arr.sort();
      })
      console.log(logo.src);
  if(logo.src.includes("icon_black_decrease.svg")){
    logo.src="./image/icon_black_increase.svg";
      let i = 0;
      li.forEach((item)=>{
          item.innerHTML = arr[i];
          i++;
        })
    }else{
        logo.src="./image/icon_black_decrease.svg";
        let i = arr.length-1;
        li.forEach((item)=>{
          item.innerHTML = arr[i];
          i--;
        })
    }
  });


let btnAdd = document.querySelector(".btn-add");
let countClick=0;
let divInpt = document.querySelector(".input");
let inpt = document.querySelector("input");
btnAdd.addEventListener("click",() =>{
  if(inpt.value != "" && countClick==0){
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let div = document.createElement("div");
    div.classList.add("li-container");
    btn.classList.add("remove-li");
    let ul = document.querySelector("ul");
    ul.append(li);
    ul.append(btn);
    div.append(li);
    div.appendChild(btn);
    ul.append(div);
    btn.innerHTML="X";
    li.innerHTML=inpt.value;
    let divUl = document.querySelector(".ul");
    divUl.style.display="block";
    divInpt.style.display="none";
    countClick++;  
    
    btn.addEventListener("click",()=>{
    div.remove();
    if(divUl.innerText == ""){
        divUl.style.display="none";
        divInpt.style.display="flex";
        inpt.value="";
        countClick = 0;
    }
    })
}
});
let btnRemove = document.querySelector(".remove");
btnRemove.addEventListener("click",()=>{
    inpt.value="";
})

let btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click",()=>{
    countClick=0;
    divInpt.style.display="flex";
    inpt.value="";
})

