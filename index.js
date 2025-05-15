import axios from 'axios';
axios.get('http://icherniakov.ru/yt-course/account/test_accounts')
    .then(function (response) {
        // handle success
        console.log(response);
    })

//fetch('http://icherniakov.ru/yt-course/account')
//     .then(response => {
//      response.json();
//     console.log(response.data);
//     })


//const url = 'http://icherniakov.ru/yt-course/account/test_accounts';
// async function user() {
//     const response = await axios.get(url);
//     console.log(response.data);
// }
// user();