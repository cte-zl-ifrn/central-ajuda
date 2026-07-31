# Central de Ajuda - IFRN Campus Avançado Natal-Zona Leste

Este repositório contém o código-fonte da **Central de Ajuda Institucional** do Campus Avançado Natal-Zona Leste do IFRN. O site é gerado com [Jekyll](https://jekyllrb.com/), utilizando o tema [Just the Docs](https://just-the-docs.github.io/just-the-docs/) e publicado via [GitHub Pages](https://pages.github.com/).

---

## 📁 Estrutura do Projeto

```text
central-ajuda/
├── .github/
│   └── workflows/
│       └── pages.yml          # Pipeline CI/CD para deploy no GitHub Pages
├── _docs/                      # Coleção de documentações e tutoriais
│   ├── ambiente-virtual/       # Categoria: Moodle / AVA
│   ├── proitec/                # Categoria: Cursos ProITEC
│   ├── central-servicos/       # Categoria: Chamados, SUAP e SEAC
│   ├── transmissoes/           # Categoria: Transmissões e Eventos
│   └── materiais/              # Categoria: Livros e Apostilas
├── _sass/
│   └── custom.scss             # Estilos personalizados (identidade IFRN)
├── assets/
│   └── css/
│       └── style.scss          # Ponto de entrada do CSS/SCSS
├── _config.yml                 # Configuração principal do Jekyll e Just the Docs
├── Gemfile                     # Dependências do Ruby/Jekyll
├── index.md                    # Página inicial (Home)
├── README.md                   # Instruções gerais do projeto
└── AGENTS.md                   # Diretrizes para agentes de IA (Antigravity CLI)
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- **Ruby** (versão 3.0 ou superior)
- **Bundler** (`gem install bundler`)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/cte-zl-ifrn/central-ajuda.git
   cd central-ajuda
   ```

2. **Instalar as dependências:**
   ```bash
   bundle install
   ```

3. **Executar o servidor local do Jekyll:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Acessar no navegador:**
   Abra [http://localhost:4000/central-ajuda/](http://localhost:4000/central-ajuda/) para visualizar o site.

---

## ✍️ Como Adicionar Conteúdo

### Criar uma Nova Categoria
1. Crie uma nova pasta dentro de `_docs/` (ex: `_docs/minha-categoria/`).
2. Crie um arquivo `_index.md` dentro da pasta com o seguinte cabeçalho:
   ```markdown
   ---
   title: Minha Categoria
   nav_order: 6
   has_children: true
   has_toc: false
   ---
   # Título da Categoria
   Descrição da nova categoria...
   ```

### Criar um Novo Tutorial / Documento
1. Crie um arquivo `.md` dentro da categoria desejada (ex: `_docs/proitec/novo-tutorial.md`).
2. Adicione o Front Matter:
   ```markdown
   ---
   title: Título do Tutorial
   parent: Cursos ProITEC
   nav_order: 2
   has_children: false
   has_toc: true
   description: Breve descrição do tutorial.
   ---
   ```
3. Escreva o conteúdo em Markdown utilizando a estrutura recomendada (sumário, passos numerados, destaques `>` para dicas e avisos).

---

## 🌐 Deploy no GitHub Pages

O projeto possui um workflow configurado em `.github/workflows/pages.yml`.

1. Certifique-se de ativar o **GitHub Pages** nas configurações do repositório no GitHub (`Settings > Pages > Source: GitHub Actions`).
2. Qualquer commit enviado para o ramo principal (`main`) disparará o build e publicação automáticos.

---

## 📜 Licença

Este projeto é desenvolvido para o **IFRN Campus Avançado Natal-Zona Leste**.
