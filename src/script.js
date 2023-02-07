
fetch('./src/cards.json').then(response => {
    return response.json();
}).then(data => {
    let html = '';
    console.log(data);
    data.forEach(elemento => {
        html += `  <article id="card" class="card borda-cor-especial card-largura p-0 m-4 col-12 col-md-4">
        <img  id="imagem" src="${elemento.imagem}" class="card-img-top .card-posicao-imagem" alt="...">
        <div class="card-body">
          <h5 id="titulo" class="card-title">${elemento.titulo}</h5>
          <p id="subtitulo" class="card-text">${elemento.subtitulo}</p>
          <a href="#" class="btn botao-cor-especial">Veja a receita</a>
        </div>
      </article>`
    });
    document.getElementById("cards-receitas").innerHTML = html;
}).catch(err => {
});