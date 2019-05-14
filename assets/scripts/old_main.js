// get_widget();

// document.addEventListener('DOMContentLoaded', () => {
//     setInterval(() => {
//         get_widget();
//     }, 25000)
// })
// document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
//     this.MaterialProgress.setProgress(76); // denote progess made
// });

// function get_widget() {
//     fetch('https://r6statsstreamwidget.azurewebsites.net/api/GetGenericStats?code=oLhpAqRTdm0vH7u0OSCmPygLxUHAlc4xKpSiVJB6xTxpBxhzPZt2hg%3D%3D&platform=pc&username=thatbread')
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function (data) {
//             var nameElem = document.getElementById('name');
//             nameElem.innerText = data.username;

//             var levelElem = document.getElementById('level');
//             levelElem.setAttribute('data-badge', data.progression.level);

//             var cardTitleElem = document.getElementById('card_title');
//             cardTitleElem.style.background = "https://ubisoft-avatars.akamaized.net/" + data.ubisoft_id + "/default_146_146.png";

//             document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
//                 this.MaterialProgress.setProgress(44);
//             });
//         });

//     fetch('https://r6statsstreamwidget.azurewebsites.net/api/GetSeasonalStats?code=oLhpAqRTdm0vH7u0OSCmPygLxUHAlc4xKpSiVJB6xTxpBxhzPZt2hg%3D%3D&platform=pc&username=thatbread')
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function (data) {
//             var nameElem = document.getElementById('name');
//             nameElem.innerText = data.username;

//             var levelElem = document.getElementById('level');
//             levelElem.setAttribute('data-badge', data.progression.level);

//             var cardTitleElem = document.getElementById('card_title');
//             cardTitleElem.style.background = "https://ubisoft-avatars.akamaized.net/" + data.ubisoft_id + "/default_146_146.png";

//             document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
//                 this.MaterialProgress.setProgress(44);
//             });
//         });
// }