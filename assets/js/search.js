document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const innerSearchInput = document.getElementById('inner-search-input');
  const resultsPreview = document.getElementById('search-results-preview');
  const searchResultsPage = document.getElementById('search-results-page');
  
  let searchData = [];

  // Fetch search JSON index
  const baseurl = window.siteBaseurl || '';
  fetch(baseurl + '/search.json')
    .then(response => response.json())
    .then(data => {
      searchData = data;
      
      // Check URL query parameters for search page
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q');
      if (query && searchResultsPage) {
        renderSearchPageResults(query);
      }
    })
    .catch(err => console.error('Erro ao carregar índice de busca:', err));

  // Live input preview for hero search
  if (searchInput && resultsPreview) {
    searchInput.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) {
        resultsPreview.style.display = 'none';
        resultsPreview.innerHTML = '';
        return;
      }

      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        (item.description && item.description.toLowerCase().includes(q))
      ).slice(0, 5);

      if (matches.length > 0) {
        let html = '<div class="preview-list">';
        matches.forEach(item => {
          html += `<a href="${item.url}" class="preview-item">
            <span class="preview-title"><i class="fa-regular fa-file-lines"></i> ${item.title}</span>
            <span class="preview-desc">${item.description}</span>
          </a>`;
        });
        html += '</div>';
        resultsPreview.innerHTML = html;
        resultsPreview.style.display = 'block';
      } else {
        resultsPreview.innerHTML = '<div class="preview-none">Nenhum resultado encontrado</div>';
        resultsPreview.style.display = 'block';
      }
    });

    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !resultsPreview.contains(e.target)) {
        resultsPreview.style.display = 'none';
      }
    });
  }

  function renderSearchPageResults(query) {
    const q = query.trim().toLowerCase();
    const matches = searchData.filter(item => 
      item.title.toLowerCase().includes(q) || 
      (item.description && item.description.toLowerCase().includes(q))
    );

    let html = `<h2>Resultados para: "${escapeHtml(query)}"</h2>`;
    if (matches.length > 0) {
      html += `<p class="search-count">${matches.length} tutorial(is) encontrado(s)</p><div class="articles-list">`;
      matches.forEach(item => {
        html += `<article class="article-summary-card">
          <div class="article-icon"><i class="fa-regular fa-file-lines"></i></div>
          <div class="article-details">
            <h3 class="article-title"><a href="${item.url}">${escapeHtml(item.title)}</a></h3>
            <p class="article-excerpt">${escapeHtml(item.description)}</p>
          </div>
        </article>`;
      });
      html += '</div>';
    } else {
      html += '<p>Nenhum resultado encontrado para a sua busca.</p>';
    }

    searchResultsPage.innerHTML = html;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
});
