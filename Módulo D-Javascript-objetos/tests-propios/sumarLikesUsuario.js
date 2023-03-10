// Test
const user = {
    usernombre: 'Juan Carlos',
    password: 'JavaScript es genial!',
    posts: [
       {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10,
       },
       {
          id: '2',
          title: 'Blablabla',
          likes: 100,
       },
       {
          id: '3',
          title: 'Qué es JavaScript?',
          likes: 35,
       },
       {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42,
       },
       {
          id: '5',
          title: 'Educación online',
          likes: 99,
       },
    ],
 };



 function sumarLikesDeUsuario(objetoUsuario) {
    // consigna original:
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post, imprmir y retornar el resultado.
    var sumaLikes = 0;
    objetoUsuario.posts.forEach((post) => {
       sumaLikes += post.likes;
    });
    console.log(sumaLikes);
    return sumaLikes;
 }
 sumarLikesDeUsuario(user);