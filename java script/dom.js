let element = document.getElementById('main-container');
element.style.backgroundColor = 'lightblue';

let container = document.getElementsByTagName('body')[0];
container.style.backgroundColor = 'lightgreen';



let content = document.getElementsByClassName('para');
content[0].innerHTML="we can html webpage dynamically using js";

function btnClick(){
    let heading = document.getElementsByClassName('main-heading')[0];
    heading.innerHTML = "We can add headings to the HTML using JS";

    let container = document.getElementsByTagName('body')[0];
    container.style.backgroundColor = 'orange';

    let element = document.getElementById('main-container');
    element.style.backgroundColor = 'yellow';
    element.style.boder = "5px,solid,green";
    
} 