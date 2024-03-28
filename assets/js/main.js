const contenedorPosts = document.querySelector("#post-data");

const getPosts = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log('error al obtener los datos', error)
    }
};

const mostrarPosts = async () => {
    const posts = await getPosts();

    const divRecuadro = document.createElement('div');
    divRecuadro.style.marginLeft = '100px';

    divRecuadro.style.width = '1000px ';
    divRecuadro.style.border = '3px solid #000000';
    divRecuadro.style.padding = '10px';

    const listaPosts = document.createElement('ul');
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;

        const parrafoItem = document.createElement('p');
        parrafoItem.textContent = post.body;
        listItem.appendChild(parrafoItem);
        listaPosts.appendChild(listItem);
    });

    divRecuadro.appendChild(listaPosts);
    contenedorPosts.appendChild(divRecuadro);
};

document.querySelector('button').addEventListener('click', mostrarPosts);