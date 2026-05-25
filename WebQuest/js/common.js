function showFeedback(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = `feedback show ${type}`;
}

function normalizeAnswer(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/\s+/g, ' ');
}

function goToNextPage(url, delay = 1500) {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
}

function renderProgress(currentPage) {
  const container = document.getElementById('progress');
  if (!container) return;

  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement('span');
    dot.className = 'progress-dot';
    if (i < currentPage) dot.classList.add('done');
    if (i === currentPage) dot.classList.add('active');
    dot.setAttribute('aria-label', `Страница ${i}`);
    container.appendChild(dot);
  }
}
