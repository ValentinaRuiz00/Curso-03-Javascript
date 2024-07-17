//CALLBACK
// const posts = [
//     {
//         userId: 1,
//         id: 1,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },
// ];
// const findPostById = (id, callback) => {
//     const post = posts.find((item) => item.id === id);

//     if (post) {
//         // mandamos el null ya que no existen errores
//         callback(null, post);
//     } else {
//         // en caso de que no exista el post
//         callback("No encontrado por id: " + id);
//     }
// };

// // ser recibe el err como primer argumento
// findPostById(4, (err, post) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(post);
// });

//PROMESAS
// const findPostById = (id) => {
//     const post = posts.find((item) => item.id === id);

//     // devolver la promesa
//     return new Promise((resolve, reject) => {
//         //resolve
//         if (post) {
//             resolve(post);
//         } else {
//             reject("No encontrado por id: " + id);
//         }
//     });
// };

// findPostById(1)
//     .then((post) => console.log(post))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("fin de la promesa"));

//ASYNC AWAIT
// const findPostById = (id) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const post = posts.find((item) => item.id === id);
//             post ? resolve(post) : reject("No encontrado por id: " + id);
//         }, 2000);
//     });

// const buscar = async () => {
//     try {
//         const post = await findPostById(4);
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
// };

// buscar();

//INTRODUCCION AL FETCH
const url = "https://jsonplaceholder.typicode.com/posts/";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))
//   .finally(() => console.log("Finalizó"));

//Otra Forma
const findPostById = async (id) => {
  try {
    const res = await fetch(url + id);
    const post = await res.json();

    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

findPostById(100);
