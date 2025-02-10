
const button=document.getElementById("button")
button.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
const surname=document.getElementById("surname").value;
const email=document.getElementById("email").value;
const number=document.getElementById("number").value;
fetch("https://script.google.com/macros/s/AKfycbxXs48EoZl7Mj0ewD_A0aE8qS4oN5X_myXdJQEBEtkiaUXMKFKwAZ9DCmJBtKXhdt-3/exec",{
    method:"POST",
    header:"application/json",
    mode:"no-cors",
    body:JSON.stringify({name,surname,email,number})

})
button.innerHTML="Successfully submitted";
alert("we will contact you")
button.setAttribute("disabled",true)
})
