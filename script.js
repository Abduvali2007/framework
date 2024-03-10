let form = document.querySelector(".form");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let btn = document.querySelector(".add");
let h4 = document.querySelector("h4");
// 1-задания
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (email.value === "motion" && pass.value === "12345") {
//     h4.innerHTML = "принято";
//     h4.style.color = "green";
//     h4.style.boxShadow = " 3px 3px green";
//     email.innerHTML=""
//     pass.innerHTML=""
//   } else if (email.value === "" && pass.value === "") {
//     email.innerHTML=""
//     pass.innerHTML=""
//     h4.innerHTML = "толтур";
//     h4.style.border = "2px solid red";
//     h4.style.boxShadow = "3px 3px red";


//   } else {
//     email.innerHTML=""
//     pass.innerHTML=""
//     h4.innerHTML = "отклонено";
    
//   }
// });

// 2-задания
let count=3
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(email.value==="motion@gmail.com"&& pass.value==="12345"){
    h4.innerHTML="доступ открыт";
    
  }else if
  (email.value==="motion@gmail.com" && pass.value!=="12345"&& 
  email.value!=="motion@gmail.com" && pass.value==="12345") {
    h4.innerHTML="неверный логин или пароль"
  } else if (email.value==="" && pass.value===""){
    h4.innerHTML="заполни"
  }
  else {
    h4.innerHTML="доступ закрыт"
    h4.style.color="red"
    count --
    if(email.value!=="motion@gmail.com" && pass.value!=="12345"){
      h4.innerHTML=`у вас осталось ${count} попытки`
    } else if (email.value==="" && pass.value===""){
      h4.innerHTML="заполни"
    }
    } 
    
    email.value=""
    pass.value=""
  })
  





