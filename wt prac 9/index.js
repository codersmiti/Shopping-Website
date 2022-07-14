const items=document.querySelector('.items');
const itemsSearch=document.querySelector('#item-serach');
const user_item=document.querySelector('.User-Items');

function AddItemsHelper(Dic){

    const html=Dic.map((data)=>{
        return ItemCard(data);
    }).join('');

    if(items){

        items.innerHTML=html;
    }

}

function myFunction(){
    alert('Your item has been successfully placed.');
}

function AddItemsHelperForUser(){

    const Dic=JSON.parse(localStorage.getItem('UserList'));

    const html=Dic.map((data)=>{
        return ItemCard(data,"Buy Now",true);
    }).join('');

    if(user_item){

        user_item.innerHTML=html;
    }

}

function RemoveItem(e){

    const id=e.target.dataset.id;
    const new_item=UserItemList.find((data)=>data.id==id);
    const index=UserItemList.indexOf(new_item);
    UserItemList.splice(index,1);
    localStorage.setItem('UserList',JSON.stringify(UserItemList));
    AddItemsHelperForUser()

    // [12].

}
function AddItem(){
    AddItemsHelper(PRODUCT);
}


function OpenItem(e){
    console.log('click');
    if(!UserIsLogin()){
        window.scrollTo(0,0)
        return ShowUserForm(null,"SignIn");

    }
    const id=e.target.dataset.id;
    console.log(id);
    const isIn=UserItemList.find((data)=>data.id==id);
    if(isIn){
        return alert('Sorry!! You can order only one item.');
    }
    const new_item=PRODUCT.find((data)=>data.id==id);
    console.table(new_item);
    

    UserItemList.push(new_item);
    console.table(UserItemList);
    localStorage.setItem('UserList',JSON.stringify(UserItemList));
    AddItemsHelperForUser();
    return alert('Hurray!! Item added to the shopping cart.');

}


function ToggleNavbar(e){
    const nav=document.querySelector('navbar');
    const bar=document.querySelector('#bar');
    nav.classList.toggle('show-navbar');
    bar.classList.toggle('roted');
}

function GetItem(e){
    e.preventDefault();
    const value=document.querySelector('#item-section')?.value;
    const new_data=PRODUCT.filter((data)=>{

        // const regex = new RegExp(value, 'gi');

        return value===data.category;

    });

    AddItemsHelper(new_data);
}

function SearchItem(e){

    const value=this.value;

    const new_data=PRODUCT.filter((data)=>{

        const regex = new RegExp(value, 'gi');

        return data.category.match(regex) || data.description.match(regex) || false;

    });

    AddItemsHelper(new_data)

}



itemsSearch?.addEventListener('change',SearchItem);
itemsSearch?.addEventListener('keyup',SearchItem);