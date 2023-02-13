
fetch('./src/cards.json').then(response => {
  return response.json();
}).then(data => {
  let html = '';
  // console.log(data);
  data.forEach(elemento => {
    html += `  <article id="card" class="card borda-cor-especial card-largura p-0 m-4 col-12 col-md-4">
        <img  id="imagem" src="${elemento.imagem}" class="card-img-top card-posicao-imagem" alt="...">
        <div class="card-body">
          <h5 id="titulo" class="card-title">${elemento.titulo}</h5>
          <p id="subtitulo" class="card-text">${elemento.subtitulo}</p>
          <a href="#" class="btn botao-cor-especial" data-bs-toggle="modal"
                data-bs-target="#modal-receitas-${elemento.id}">Veja a receita</a>
        </div>
      </article>`
  });
  document.getElementById("cards-receitas").innerHTML = html;
}).catch(err => {
});


fetch('./src/receitas.json').then(response => {
  return response.json();
}).then(data => {
  let html = '';
  // console.log(data);
  data.forEach(elemento => {
    html += `  
    <div class="modal fade" id="modal-receitas-${elemento.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div id="receitas" class="modal-dialog">
        <dialog class="modal-content">
          <header class="modal-header">
              <h3 class="modal-title fonte-titulo cor-especial" id="exampleModalLabel">${elemento.titulo}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </header>
          <main class="modal-body">
             <section class="container">
                <div class="row">
                  <div class="col">
                      <h5 class="text-center fonte-titulo">Ingredientes:</h5>
                      <p>${elemento.ingredientes}</p>
                      <h5 class="text-center fonte-titulo">Preparo:</h5>
                      <p class="">${elemento.receita}</p>
                  </div>
                </div>
              </section>
          </main>
          <footer class="modal-footer">
            <button type="button" class="btn botao-cor-especial" data-bs-dismiss="modal">Fechar</button>
          </footer>
        </dialog>
      </div>
    </div>
   `
  });
  document.getElementById("corpo").innerHTML += html;
}).catch(err => {
});