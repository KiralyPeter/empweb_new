const doc = {
   addButton: document.querySelector('#addButton')
};

const state = {
    token: null
};

window.addEventListener('load', ()=> {
    init()
});

function init (){
    // VAGY: doc.addButton.addEventListener('click', startAdding); // ha egy sort írunk akkor érdemes...
    doc.addButton.addEventListener('click', startAdding);
};

// kinyerjük a lokális tárolóból a tokent
function startAdding(){
    console.log(localStorage.getItem('token'))
}
