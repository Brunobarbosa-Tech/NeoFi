# 🌐 NeoFi - Landing Page Responsiva

Projeto de uma landing page moderna e responsiva para a marca **NeoFi**, com foco em tecnologia, segurança digital e soluções inovadoras para o futuro financeiro.

---

## 📁 Estrutura de Pastas

```
neofi-site/
│
├── index.html
├── README.md
│
├── src/
│   ├── css/
│   │   ├── global.css           # Estilos globais da página
│   │   └── responsive.css       # Estilos de responsividade
│   │
│   ├── js/
│   │   └── main.js              # Script do menu-toggle (mobile)
│   │
│   └── assets/
│       ├── icon/                # Ícones e logotipo
│       │   ├── logo-neofi.svg
│       │   └── menu.svg
│       └── img/                 # Imagens do site
│           ├── banner.png
│           └── bg-pattern.svg
```

---

## 📄 index.html

Arquivo principal contendo toda a estrutura do site com:

- Header com logotipo, navegação e botão;
- Seções para conteúdo principal (main);
- Footer com informações da empresa;
- Link para os arquivos CSS e JS.

---

## 🎨 Estilos CSS

### `global.css`
Contém:
- Reset global (margin, padding, border);
- Variáveis com `:root` (cores e fontes);
- Estilo dos botões, títulos, parágrafos, layout geral;
- Menu-toggle e footer estilizados.

### `responsive.css`
Contém:
- Media queries para tamanhos: **1024px**, **768px**, **480px**;
- Ajustes de layout mobile (direção das seções, gaps, tamanhos de texto);
- Ativação do menu hamburguer.

---

## 📜 JavaScript

### `main.js`

Adiciona funcionalidade ao botão de menu mobile:

```js
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-content');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
```

---

## 📷 Assets

### `/icon/`
- `logo-neofi.svg`: logotipo principal da NeoFi.
- `menu.svg`: ícone alternativo para menu hambúrguer (opcional).

### `/img/`
- `banner.png`: imagem principal da página.
- `bg-pattern.svg`: imagem decorativa de fundo.

---

## ⚙️ Funcionalidades

- ✅ Layout moderno com fundo escuro
- ✅ Totalmente responsivo (desktop, tablet e celular)
- ✅ Menu hamburguer funcional
- ✅ Botões com hover animado
- ✅ Rodapé simples e elegante

---

## 💻 Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox e Media Queries)
- JavaScript Vanilla
- Estrutura sem frameworks externos

---

## 📱 Responsividade

O site adapta-se perfeitamente a:

- 💻 Desktops e notebooks (a partir de 1025px)
- 📱 Tablets (768px a 1024px)
- 📲 Smartphones (até 768px e até 480px)

---

## 🚀 Como Usar

1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/seu-usuario/neofi-site.git
   ```

2. Abra o arquivo `index.html` no seu navegador.

3. Explore e edite conforme suas necessidades!

---

## 👤 Desenvolvedor

**Bruno Barbosa**  
Desenvolvedor Front-End • Estudante do SENAI Suíço-Brasileira  
[LinkedIn](https://www.linkedin.com/in/br-barbosa/) | [Instagram](https://www.instagram.com/bruuno_tech/) | [GitHub](https://github.com/Brunobarbosa-Tech)

---

Desenvolvido por Bruno Barbosa 🚀

© 2025 • NeoFi. Todos os direitos reservados.