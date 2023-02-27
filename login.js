

function registerPopup(){
    
    const registerPopup= document.getElementById("registerForm");
    console.log(registerPopup)
    registerPopup.style.display= "block";
    
}

function loginPopup(){
    const loginPopup= document.getElementById("loginForm")
    loginPopup.style.display= "block"
}

function formValidation(event){
      console.log("event");
    
    // event.preventDefault();

    validateEmail();
    validatename();
    validatePassword();
    
    return false;

    
}


function registeredMessage(){
    
    const registeredPopup= document.getElementById("registeredMessage")
    const registerPopup= document.getElementById("registerForm");
    
   
    registerPopup.style.display= "none";
    registeredPopup.style.display= "block";
    
}




var register= document.getElementById("regBtn");

register.addEventListener("click", () => {
  
     credentials();
   
});



//  function credentials(){
//     var EmailInput=document.getElementById("email").value;
//     var PasswordInput = document.getElementById("password").value;
     
//     var userdata=[];

//     const user={
//         email: EmailInput ,
//         password: PasswordInput 

//     }

//     userdata.push(user);

//     localStorage.setItem("userdata", JSON.stringify(userdata));
    
//  }


//  function multipleItems(){

//     var oldUserData = JSON.parse(localStorage.getItem("userdata"))

//     console.log(oldUserData,"old userdata")
//     var EmailInput=document.getElementById("email").value;
//     var PasswordInput = document.getElementById("password").value;
     
//     var newuserdata=[];

//     const newuser={
//         email: EmailInput ,
//         password: PasswordInput 

//     }

    // let [oldemail,oldpassword]= oldUserData ;
    // console.log(oldemail)

    // const oldUser={
    //     email: oldemail,
    //     password: oldpassword
    // }

    // newuserdata.push(newuser,...oldUserData);

    // console.log(newuserdata)


    
    // localStorage.setItem("userdata", JSON.stringify(newuserdata));
    
    
    

     
//  }


function credentials(){
    var EmailInput=document.getElementById("email").value;
    var PasswordInput = document.getElementById("password").value;
    if(localStorage.getItem("userdata")=== null){
        
             
            var userdata=[];
        
            const user={
                email: EmailInput ,
                password: PasswordInput
        
            }
        
            userdata.push(user);
        
            localStorage.setItem("userdata", JSON.stringify(userdata));

            registeredMessage();
            
            
         
    }

    else {
        let oldUser = JSON.parse(localStorage.getItem("userdata"))
        oldUser.forEach(element => {
                if(element.email === EmailInput){
                    alert( "Your account has already been registered. Please login.")
                }
                else{
                    let user = {
                        email: EmailInput ,
                        password: PasswordInput
                    }
                    oldUser.push(user)
                    localStorage.setItem('userdata', JSON.stringify(oldUser))
                    registeredMessage();
                
                }
        })
    }
}




function validateEmail(){
    var EmailInput=document.getElementById("email").value;
    var error=document.getElementById("error1");
    var regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(EmailInput==""){
        error.textContent=" please enter the email"
        error.style.color= "red"
        return false;
    }

    if(EmailInput.match(regularExpression)){
        error.textContent=""
        //  localStorage.setItem("email", EmailInput)
        return true;
    }

    else {
        error.textContent="Email invalid"
        error.style.color= "red"
        return false;
    }

    
}

function validatename(){
    var NameInput=document.getElementById("name").value;
    var error=document.getElementById("error2");

    if(NameInput==""){
        error.textContent=" enter the name"
        error.style.color= "red"
        return false;
    }

    else{
        error.textContent=" "
        // localStorage.setItem("name", NameInput)
        return true;
    }
}


function validatePassword(){
    var PasswordInput = document.getElementById("password").value;
    var error= document.getElementById("error3");
    var regularExpression = /^[A-Za-z]\w{7,14}$/;

    if(PasswordInput==""){
        error.textContent=" please enter the Password"
        error.style.color= "red"
        return false;
    }

    if(PasswordInput.match(regularExpression)){
        error.textContent=""
        //  localStorage.setItem("password", PasswordInput)
        return true;
    }

    else {
        error.textContent="password not strong enough!"
        error.style.color= "red"
        return false;   
    }
}



var close= document.getElementById("close")
const registeredPopup= document.getElementById("registeredMessage") 

close.onclick = function clear(){
    registeredPopup.style.display= "none";
}





function login(event){
    console.log("event")
    event.preventDefault();


     var registeredUserdata= JSON.parse(localStorage.getItem("userdata"))

    console.log(registeredUserdata)

    registeredUserdata.forEach(element => {
        var email=document.getElementById("Email1").value;
    if( element. email == email ){
        window.location.replace("/index.html");
        
    }
    else{
        alert("User not registered!")
    }
    })
    // return false;
}