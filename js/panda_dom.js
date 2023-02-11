// all h2 tag color change with lightblue

const allH2Tag = document.getElementsByTagName('h2');
for(let x of allH2Tag){
    x.style.color ='lightblue';
}


// backpack section background color change with tomato color

document.getElementById('backpack').style.backgroundColor = 'tomato';


// all card border radius change with 30px

const cardClass = document.getElementsByClassName('card');
for(let x of cardClass){
   x.style.borderRadius ='30px';
}

// just simple click event test by banner button

function testClick(event){
    console.log(event.target.parentNode);
}


// card vanish when clicking its buy button

const allBuyBtn = document.querySelectorAll('.buy-btn');
for(let x of allBuyBtn){
    x.addEventListener('click',function(e){
        // console.log(e.target.parentNode.parentNode.parentNode.parentNode);
        // console.log(e.target.parentNode.parentNode.parentNode);
        e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    })
}

// input field validation for submit button disable or enable

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(e){
    if(e.target.value === 'email'){
        document.getElementById('submit-btn').removeAttribute('disabled');
    }else{
        document.getElementById('submit-btn').setAttribute('disabled', true);
    }
});

// background color change by clicking double click in Lets stay in touch section

document.getElementById('subscribe').addEventListener('dblclick', (e) => {
   e.target.style.backgroundColor = 'grey';
})

// dynamically image change by entering mouse on an image in first category section card
let img_index= 1;
document.getElementById('change_img').addEventListener('mouseenter', (e) =>{
    const images =[
        "images/categories/watch.png",
        "images/categories/bag.png",
        "images/categories/shoes.png",
    ];
    
    if(img_index >= images.length){
        img_index= 0;
    }
    e.target.setAttribute('src',images[img_index]);
    img_index ++;
});
