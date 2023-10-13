//Fetch запрос
//Посылает запрос на сервер, а также
// на сторонние API-сервисы.
//API - application programming interface
// JSON - JavaScript Object Notation

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => console.log(data));
