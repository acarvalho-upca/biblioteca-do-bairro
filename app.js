const livro = {
titulo: "Os Maias",
autor: "Eça de Queirós",
ano: 1888,
disponivel: true,
};
console.log(livro.titulo);
livro.disponivel = false; // foi emprestado
livro.estante = "B3"; // nova propriedade
console.log(livro);