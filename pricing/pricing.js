// pricing/pricing.js
// Dynamically renders the pricing section using pricing-data.json

(function() {
  const container = document.getElementById('pricing-grid');
  if (!container) return;

  fetch('pricing/pricing-data.json')
    .then(res => res.json())
    .then(pricingData => {
      container.innerHTML = pricingData.map(plan => `
        <div class="pricing-card${plan.popular ? ' popular' : ''}">
          ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
          <div class="pricing-header">
            <h3>${plan.title}</h3>
            <div class="price">${plan.price}</div>
            <div class="period">${plan.period}</div>
          </div>
          <ul class="feature-list">
            ${plan.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <a href="${plan.button.href}" class="${plan.button.class}">${plan.button.label}</a>
        </div>
      `).join('');
    });
})();
