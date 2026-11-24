const Pesquisar= document.getElementById('inputlupa');

Pesquisar.addEventListener('input', (event) =>{
    const value = Formatar(event.target.value);
    const items= document.querySelectorAll('.lista .item');
    items.forEach(item =>{
        if(Formatar(item.textContent).includes(value))
            {item.style.display='block'}
        else{item.style.display='none'}});
});
function Formatar(value){
    return value.toLowerCase().trim();
}

const dialog = document.getElementById('docs');


function Abrir(id){
    const artigo = document.getElementById(id);
    if(artigo){
document.querySelectorAll('#artigos article').forEach(artg =>{
    artg.classList.remove('ativo');
});
    artigo.classList.add('ativo')
    if(!dialog.open){ dialog.showModal()}
}
else{alert('artigo não encontrado')}
}

function Fechar(){
    dialog.close();
}