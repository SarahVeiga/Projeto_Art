// ================= ALTERNAR MODO CLARO/ESCURO =================
// Função para alternar entre os temas claro e escuro
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light'); // Alterna a classe "light" no elemento HTML
  
    // Salva o tema escolhido no localStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
  

    // Atualiza a cor do texto do título
    updateTextColor();
  }
    
function updateTextColor (){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

  // Carrega o tema salvo no localStorage ao carregar a página
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }
  
  