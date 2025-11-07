// careers/careers.js
// Dynamically renders the careers list from careers-data.json

document.addEventListener('DOMContentLoaded', function() {
  fetch('careers-data.json')
    .then(res => res.json())
    .then(data => renderCareers(data));
});

function renderCareers(data) {
  const container = document.getElementById('careers-list');
  if (!container) return;
  let html = '';
  data.forEach(section => {
    if (section.team) {
      html += `<h2 class="careers-team">${section.team.toUpperCase()}</h2>`;
    }
    if (section.subteam) {
      html += `<h3 class="careers-subteam">${section.subteam}</h3>`;
    }
    if (section.jobs && section.jobs.length > 0) {
      html += '<ul class="careers-job-list">';
      section.jobs.forEach(job => {
        // build an encoded apply URL and place it directly on the anchor's href
        var applyUrl = '/careers/apply.html?title=' + encodeURIComponent(job.title || '') +
          '&team=' + encodeURIComponent(section.team || '') +
          '&location=' + encodeURIComponent(job.location || '') +
          '&type=' + encodeURIComponent(job.type || '');
        html += `
          <li class="careers-job">
            <div class="job-info">
              <div class="job-title">${job.title}</div>
              <div class="job-meta">${job.type} &mdash; <span>${job.location}</span></div>
            </div>
            <a href="${applyUrl}" class="apply-btn" data-title="${escapeHtml(job.title || '')}" data-team="${escapeHtml(section.team || '')}" data-location="${escapeHtml(job.location || '')}" data-type="${escapeHtml(job.type || '')}" aria-label="Apply for ${escapeHtml(job.title || '')}">APPLY</a>
          </li>
        `;
      });
      html += '</ul>';
    }
  });
  container.innerHTML = html;

  // attach click handlers to ensure navigation uses properly encoded query params
  container.querySelectorAll('.apply-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      // navigate using the anchor's already-encoded href so values match the JSON data
      e.preventDefault();
      var url = btn.getAttribute('href') || btn.href;
      if (url) window.location.href = url;
    });
  });
}

// small helper to escape quotes/newlines for data- attributes
function escapeHtml(str){
  return String(str).replace(/"/g, '&quot;').replace(/\n/g,' ').replace(/\r/g,' ');
}
