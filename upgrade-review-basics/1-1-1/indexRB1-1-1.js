const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]

let categorias = [];
for (const movie of movies) {
    movie.categories.forEach(pelicula => {
        if (categorias.includes(pelicula)) {
            console.log("Categoria repetida: ", pelicula);
        } else {
            categorias.push(pelicula);
        }
    });
}
console.log(categorias);