const item = document.getElementsByClassName("nav-link");
let currentLocation =  location.href;

for(let i = 0; i<item.length; i++){
    let element = item[i];
    console.log(element)
    if(element.href === currentLocation){
       element.className = "nav-menu-active";
    }
}
