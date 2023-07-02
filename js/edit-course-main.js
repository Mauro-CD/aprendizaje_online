let foro = document.getElementById('foro');
// const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

// fetch('https://maurocd.pythonanywhere.com/productos', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// })
//    .then(response => response.json())
//    .then(response => loadComments(response))
   

// function loadComments(comments) {
//     let dateObj = new Date();
//     let numberOfMlSeconds = dateObj.getTime();
//     let addMlSeconds = Math.floor(Math.random() * 60000 );
//     let newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
//     let i = 0
//     let top = 100
//     while (i < comments.length && i <top ) { 
//         parImpar=(i % 2);
//         numberOfMlSeconds = newDateObj.getTime();
//         addMlSeconds = Math.floor(Math.random() * 600000 + 600000*2*i );
//         newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
//         let date_final = newDateObj.getDate() + "/" + month[newDateObj.getMonth()] + "/" + newDateObj.getFullYear() + " " + newDateObj.toTimeString().substr(0,5);
//         let header = `<div class="${parImpar.toString().includes("0") ? "comentP" : "comentI" }">`;
//         let dataInitial = `<div><p class="user"><strong>id:</strong> ${comments[i].id}</p><p class="date" >${date_final}</p></div>`;
//         let title = `<div class="title"><p><strong>Titulo:</strong> <em>${comments[i].nombre}</em></p></div>`;
//         let comment = `<div class="Comont"> <textarea disabled >${comments[i].precio}</textarea></div>`;
//         foro.innerHTML += `${ header + dataInitial + title + comment }</div>`;
//         i++
//      }
// }
