const widjet=document.querySelector('#idd'),
img=document.querySelector('.imag'),
ulul=document.querySelector('.ulul')
let k=0
img.addEventListener('click', ()=>{
    if((k%2)==0) {
        widjet.classList.add('container')
        const prom =fetch('/js.json')
    .then(resp=> resp.json()).then(resp=>render(resp))
    }
    else {
        widjet.classList.remove('container')
        widjet.innerHTML=(``)
    }
    k++
    
})
function takeNames(datas){
    return `<li class="data">${datas.name}</li>`
}
function render(users, c) {
    const html= users.map(takeNames).join('')
    widjet.innerHTML=html
}
// async function start(){
//     try {
//     const resp= await fetch('./js.json')
//     const data= await resp.json
//     render(data)
//     console.log(data)}
//      catch (err){}
// }
// start()

// const get = fetch('./js.json').then(resp=>resp.json()).then(resp=>console.log(resp))