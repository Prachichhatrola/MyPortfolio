const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function submitForm(){
    const bodyMessage = `Full Name: ${fullName.value}<br>Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "prachichhatrola2@gmail.com",
        Password : "73AE81303CAE59445164A8FEB97B3FA06D95",
        To : 'prachichhatrola2@gmail.com',
        From : "prachichhatrola2@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

// function checkInputs(){
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value == ""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         if (items[1].value != ""){
//             checkEmail();
//         }

//         items[1].addEventListener("keyup", () =>{
//             checkEmail();
//          });

//         item.addEventListener("keyup", () => {
//             if (item.value != ""){
//                 item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//             }
//             else{
//                 item.classList.add("error");
//             item.parentElement.classList.add("error");
//             }
//         })
//     }
// }

// function checkEmail(){
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z{2,3})(\.[a-z]{2,3})?$/;

//     const errorTextEmail = document.querySelector(".error-text.email");

//     if (!email.value.match(emailRegex)){
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if (email.value != ""){
//             errorTextEmail.innerText = "Enter a valid email address"; 
//         }
//         else{
//             errorTextEmail.innerText = "Email address can't be blank"; 
//         }
//     }
//     else{
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // checkInputs();
    submitForm();
})