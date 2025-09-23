// assets/footer.js
// Injects the unified footer into the page

(function() {
  const footerHTML = `
    <footer class="footer popular-footer">
        <div class="container">
            <div class="footer-logo-row" style="display:flex;align-items:center;justify-content:center;gap:2rem;margin-bottom:1.5rem;">
            </div>
            <div class="container">
                <div class="footer-content" style="display:flex;align-items:flex-start;justify-content:space-between;gap:3rem;flex-direction:row;">
                    <div class="footer-logo-col" style="display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:1rem;">
                        <img src="/assets/PRL_Insights_Logo.png" alt="PRL Insights Logo" style="height:200px;width:200px;object-fit:contain;" />
                        <div class="social-links" style="margin-top:1rem;display:flex;gap:1.2rem;">
                            <a href="https://www.linkedin.com/company/prlinsights/" class="social-link" title="LinkedIn" target="_blank" rel="noopener">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:0.4em;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
                                LinkedIn
                            </a>
                            <a href="https://x.com/PRLInsights" class="social-link" title="X (Twitter)" target="_blank" rel="noopener">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:0.4em;"><path d="M17.53 2.47a2.5 2.5 0 0 1 3.54 3.53l-4.24 4.24 4.24 4.24a2.5 2.5 0 0 1-3.54 3.54l-4.24-4.24-4.24 4.24a2.5 2.5 0 0 1-3.54-3.54l4.24-4.24-4.24-4.24a2.5 2.5 0 0 1 3.54-3.53l4.24 4.24 4.24-4.24z"/></svg>
                                X
                            </a>
                            <a href="https://www.facebook.com/61580486255427" class="social-link" title="Facebook" target="_blank" rel="noopener">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:0.4em;"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z"/></svg>
                                Facebook
                            </a>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:row;align-items:flex-start;gap:3rem;">
                        <div class="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="/services/">Marketing Analytics</a></li>
                                <li><a href="/services/">Media Optimization</a></li>
                                <li><a href="/services/">Causal Inference</a></li>
                                <li><a href="/integration/">Data Integration</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/about/">About Us</a></li>
                                <li><a href="/case-studies/">Case Studies</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="/contact/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
               <div class="footer-bottom">
				<div class="copyright">
					© 2025 PRL Inights &amp; Partners. All rights reserved.
				</div>
				<div class="footer-links">
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Service</a>
					<a href="#">API Documentation</a>
				</div>
			</div>
            </div>
        </div>
    </footer>
  `;

  function injectFooter() {
    // Remove any existing footer
    document.querySelectorAll('footer.footer').forEach(f => f.remove());
    // Inject at end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();
