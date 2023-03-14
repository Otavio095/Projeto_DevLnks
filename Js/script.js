function toggleMode() {
  const html = document.documentElement // (Pegando html) documet = representação do nosso documento em formato de obj JS;
  html.classList.toggle("light") // (Troca das classes) Simplificando o cód abaixo;
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add('light');
  // }

  // Próx passo, pegar tag img;

  const img = document.querySelector("#profile img")

  // substituir a img;
  if (html.classList.contains("light")) {
    // se tiver light mode add img light;
    img.setAttribute('src', './assets/avatar-light.png'); // Modificando um atributo;
  } else {
    // se tiveer sem light mode, manter a img normal;
    img.setAttribute('src', './assets/avatar.png');
  }

  
}
