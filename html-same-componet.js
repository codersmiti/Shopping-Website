const body=document.querySelector('body');

function Navbar(){
        const userInfo=JSON.parse(localStorage.getItem('UserInfo'));
        const nav=document.querySelector('navbar');
        let isUserLogIn=true;
        if(!userInfo){
            isUserLogIn=false;
        }

    let html=`
    <div class="navbar-item-last"> 
            <form  class="userform login" onsubmit="FindUserInfo(event)">
                 <h3 class="close" onclick="ShowUserForm(event,\`LogIn\`)"><a>x</a></h3>
                <h3>Log In</h3>
                <div class="input-label" required>Enter email:</div>
                <input type="email" name="email" id="emaillogin" placeholder="Enter email" required>
                
                <div class="input-label">Enter password:</div>
                <input type="password" name="password" id="password-login" placeholder="Enter password" required>
                <button type="submit" value="Log In">Log In</button>
            </form>   
            <form class="userform signin" onsubmit="AddUserInfo(event)">
            <h3 class="close" onclick="ShowUserForm(event,\`SignIn\`)"><a>x</a></h3>
            <h2 style="color: #fff;">Welcome To Online Shopping!!!</h2>    
            <h1></h1>
                <div class="input-label">Enter name:</div>
                <input type="text" name="email" id="name" placeholder="Enter name" required>
                <div class="input-label">Enter email:</div>
                <input type="email" name="email" id="email-signin" placeholder="Enter email" required>
                <div class="input-label">Enter password:</div>
                <input type="password" name="password" id="password-signin" placeholder="Enter password" required>
                <div class="input-label">Confirm Your password:</div>
                <input type="password" name="comfimpassword" id="comfimpassword" placeholder="Enter conform password" required>
                <div class="input-label">Enter the Phone Number:</div>
                <input type="number" name="pnumber" id="pnumber" placeholder="Enter Phone Number" required>
                <div class="input-label">Enter Address:</div>
                <input type="text"  name="Address" id="Address"  placeholder="Enter Address" required>
                <button type="submit" value="Log In">Sign In</button>
            </form> 
    </div>    
    `

    if(nav){
        nav.innerHTML=html;
    }
    else{
        html=`<button class='btn bar'>
              <img src="static/bar.png" id="bar" onclick="ToggleNavbar(event)">
              </button>
                
        
               <navbar>${html}</navbar>`

        body.innerHTML=html+body.innerHTML;
    }
}

function Footer(){
    const html=`
    <footer class="footer1">
    <div class="footer">
    <a class="footer2" href="#">All Copyrights &copy; 2021 Online-Shopping.com</a>
    </div>
    </footer>
    `

    body.innerHTML=body.innerHTML+html;

}


// ????
function ItemCard(data,text="???? Add To Cart ",remove=false){

    const {img,price
    ,category,
    description,id}=data
    return `<div class="item">
    <img src=${img}>
    <div class="category">${category}</div>
    <p class="description">${description}.</p>
    <p class="price hover">Price:??? ${price}</p>
    <button class="btn" data-id=${id} onclick="OpenItem(event)">${text}</button>
    ${remove ? `<button class="btn" data-id=${id} onclick="RemoveItem(event)">Remove</button>`:``}

     </div>
    `
}



function UserInfoAdd(){
    const {name,email,adders,phonenumber}=JSON.parse(localStorage.getItem('UserInfo'));

    const html=`
    <h3>User Information</h3>
    <table>
    <div class="userinfo-item">

        <div class="input-label">Name:</div>
        <input type="text" value=${name} readonly>
    </div>
    <div class="userinfo-item">

        <div class="input-label">Email:</div>
        <input type="email" value=${email} readonly>
    </div>
    <div class="userinfo-item">

        <div class="input-label">Phone Number:</div>
        <input type="number" value=${phonenumber} readonly>
    </div>
    <div class="userinfo-item">

        
        <div class="input-label">Address:</div>
        <input type="text" value=${adders} readonly>
    </div>
`

   const user=document.querySelector('.UserInfo');
   if(user){
       user.innerHTML=html;
   }else{
      throw new Error("UserInfo div not found")
   }
}

Navbar();
Footer();


console.log(1);