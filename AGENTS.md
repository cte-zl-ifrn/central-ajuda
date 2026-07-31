# AGENTS.md - Diretrizes para Agentes de IA (Antigravity CLI)

Este arquivo estabelece as diretrizes de arquitetura, padrões de projeto e procedimentos operacionais para agentes autônomos (Google Antigravity / `agy`) trabalhando no repositório **Central de Ajuda IFRN**.

---

## 🤖 Contexto e Visão Geral

- **Projeto**: Central de Ajuda Institucional do IFRN Campus Avançado Natal-Zona Leste.
- **Tecnologias**: Jekyll 4.3+, Tema Just the Docs (`remote_theme`), GitHub Pages, SCSS/CSS.
- **Repositório**: `cte-zl-ifrn/central-ajuda`
- **Baseurl**: `/central-ajuda`

---

## 📂 Arquitetura de Documentos

Toda a documentação técnica e institucional reside no diretório `_docs/`, organizado por coleções:

- `_docs/ambiente-virtual/`: Tutoriais sobre Moodle e AVA.
- `_docs/proitec/`: Cursos e orientações do ProITEC.
- `_docs/central-servicos/`: Suporte, SUAP, SEAC e atendimento.
- `_docs/transmissoes/`: Eventos online e transmissões.
- `_docs/materiais/`: Livros e materiais didáticos.

---

## ✍️ Padrões de Conteúdo e Escrita

1. **Tom de Voz**: Institucional, claro, acolhedor e acessível a estudantes e servidores.
2. **Front Matter Obrigatório**:
   ```yaml
   ---
   title: Nome do Artigo
   parent: Nome da Categoria (opcional)
   nav_order: 1
   has_children: false
   has_toc: true
   description: Resumo objetivo do artigo.
   ---
   ```
3. **Estrutura de Artigos/Tutoriais**:
   - Título `<h1>` único no topo.
   - Breve parágrafo introdutório.
   - Seção `## Sumário` com links para as âncoras principais.
   - Seções numeradas para tutoriais (`## Passo 1:...`, `## Passo 2:...`).
   - Uso de blocos de citação (`> **Dica**: ...`, `> **Importante**: ...`) para avisos.
   - Seção final `## Perguntas Frequentes` ou `## Links relacionados`.

---

## 🎨 Estilização e Temas

- **Cores Oficiais**:
  - Verde IFRN: `#00823b`
  - Vermelho IFRN: `#cb2c31`
  - Azul Institucional: `#0266b3`
- Altera-se o estilo visual exclusivamente em `_sass/custom.scss`.
- Não sobrescreva estilos padrão do Just the Docs desnecessariamente.

---

## 🛠️ Comandos de Execução Local e Validação

Quando um agente for validar alterações localmente, deve executar:

```bash
# Instalação de gemas
bundle install

# Compilação e servidor local
bundle exec jekyll serve

# Verificação sem subir servidor (apenas build)
bundle exec jekyll build
```

---

## 🚨 Regras de Segurança e Preservação

- **NUNCA** execute comandos destrutivos (`git reset --hard`, `rm -rf _docs/`) sem autorização prévia.
- **NUNCA** altere a estrutura do `.github/workflows/pages.yml` sem garantir que os tokens de permissão e versões de Actions sejam mantidos.
- Sempre faça commit de alterações em branches apropriadas ou siga o fluxo do usuário.
