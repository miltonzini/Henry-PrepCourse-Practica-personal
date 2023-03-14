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
    console.log("los likes totales de " + objetoUsuario.nombre + " son: " + sumaLikes);
    return sumaLikes;
 }
 
 sumarLikesDeUsuario(user1);
 sumarLikesDeUsuario(user2);