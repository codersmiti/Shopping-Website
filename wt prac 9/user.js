let LogInForm=document.querySelector('.login');
let SingInForm=document.querySelector('.signin');
const EmailLogin=document.querySelector('#emaillogin');
const EmailSignin=document.querySelector('#email-signin');
const PasswordLogin=document.querySelector('#password-login');
const Name=document.querySelector('#name');
const PasswordSingin=document.querySelector('#password-signin');
const CpasswordSingin=document.querySelector('#comfimpassword');
const PhoneNumber=document.querySelector("#pnumber");
const Address=document.querySelector('#Address');




// console.log(2);


function ShowUserForm(e,text){

    // console.log(SignInForm);

    if(!LogInForm){
        LogInForm=document.querySelector('.login');
    }

    if(!SingInForm){
        SingInForm=document.querySelector('.signin');
    }
    if(text==='LogIn'){
        return LogInForm.classList.toggle('show-user-form');
    }
    console.log(12);
   SingInForm.classList.toggle('show-user-form');
}


function AddUserInfo(e){
    // console.log(e);
    // localStorage.setItem('rer',JSON.stringify(e));
    e.preventDefault();
    // e.preventDefault();
    // 2322

    const email=EmailSignin.value,password=PasswordSingin.value,cpassword=CpasswordSingin.value;
    const phonenumber=PhoneNumber.value,adders=Address.value,name=Name.value;

    if(password.length<8){
        return alert('PassWord Must me 8 char or more')
    }



    if(password!==cpassword){
        return alert('Both password must be same');
    }
   

    const user={
        email,password,phonenumber,adders,name
    }
    localStorage.setItem('UserInfo',JSON.stringify(user));
    ShowUserForm(null,"SignIn")
    Navbar();

}


function FindUserInfo(e){

    e.preventDefault();

    // console.log('aksio');
    // e.preventDefault();

    const data=JSON.parse(localStorage.getItem('UserInfo'));

    if(!data){
        return alert('User Not Exits');
    }

    const pass=PasswordLogin.value;
    const email=EmailLogin.value;

    if(email!==data.email){
        return alert('User Not Exits');
    }

    if(pass!==data.password){
        return alert("Worng Pass")
    }
    ShowUserForm(null,"LogIn");
    Navbar();
}


function LogoutUser(){
    // console.log(LogInForm);
    // localStorage.removeItem('UserInfo');
    localStorage.clear();
    // console.log(LogInForm);
    // Navbar();
    // win
    // console.log(LogInForm);
}


function UserIsLogin(){
    return localStorage.getItem('UserInfo')!==null;
}


const UserInfoDiv=document.querySelector('.UserInfo')