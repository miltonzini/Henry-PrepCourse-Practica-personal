// Sumar los likes del usuario. Variación de uno de los ejercicios del test.

const user1 = {
    nombre: 'Juan Carlos',
    password: 'JavaScript es genial!',
    posts: [
       {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10,
       },
       {
          id: '2',
          title: 'Post Viral',
          likes: 93,
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
          likes: 91,
       },
    ],
 };


 const user2 = {
   nombre: 'Lucas',
   password: 'JavaScript es genial!',
   posts: [
      {
         id: '1',
         title: '10 cosas inolvidables',
         likes: 5,
      },
      {
         id: '2',
         title: 'Blah',
         likes: 5,
      },
      {
         id: '3',
         title: 'Qué es un objeto?',
         likes: 10,
      },
      {
         id: '4',
         title: 'Conejos y perros',
         likes: 11,
      },
      {
         id: '5',
         title: 'lorem ipsum',
         likes: 13,
      },
   ],
};


function sumarLikesDeUsuario(objetoUsuario) {    
   var sumaLikes = 0;
   objetoUsuario.posts.forEach((post) => {
      sumaLikes += post.likes;
   });
   console.log(objetoUsuario.nombre + " tiene un total de " + sumaLikes + " likes.");
   return sumaLikes;
}
 
 
function mejorPost(objetoUsuario) {
   var postIndex;
   var biggestNumberOfLikes = 0;

   for (let i = 0; i < objetoUsuario.posts.length; i++) {
      if (objetoUsuario.posts[i].likes > biggestNumberOfLikes) {
         biggestNumberOfLikes = objetoUsuario.posts[i].likes;
         postIndex = i;
      }
   }
   console.log("El mejor post de " + objetoUsuario.nombre + " tiene " + biggestNumberOfLikes + " likes y es el titulado " + "\"" + objetoUsuario.posts[postIndex].title + "\".");
   return
}

sumarLikesDeUsuario(user1);
mejorPost(user1);

console.log(" ");

sumarLikesDeUsuario(user2);
mejorPost(user2);