const allH2Tag = document.getElementsByTagName('h2');
for(let x of allH2Tag){
    x.style.color ='lightblue';
}

document.getElementById('backpack').style.backgroundColor = 'tomato';

const cardClass = document.getElementsByClassName('card');
for(let x of cardClass){
   x.style.borderRadius ='30px';
}

function testClick(event){
    console.log(event.target.parentNode);
}

const allBuyBtn = document.querySelectorAll('.buy-btn');
for(let x of allBuyBtn){
    x.addEventListener('click',function(e){
        // console.log(e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode));
        e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    })
}