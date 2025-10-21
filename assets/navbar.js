(function() {
     // Add navbar.css if not present
    if (!document.querySelector('link[href$="navbar.css"]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/assets/navbar.css';
        document.head.appendChild(link);
    }
  var navHtml = `\
<nav class="navbar">
    <div class="container">
        <div class="nav-header">
            <a href="/" class="logo" style="display:flex;align-items:center;justify-content:center;padding:0.5rem 1.5rem;">
                <img src="/assets/PRL_Insights_Logo.png" alt="PRL Insights Logo" style="height:150px;width:150px;object-fit:contain;vertical-align:middle;" />
            </a>
             <button class="nav-toggle" onclick="toggleMobileNav()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="nav-menu" id="navMenu">
            <a href="/services/" class="nav-link">Services</a>
          <!-- <a href="/integration/" class="nav-link">Integration</a> -->
            <a href="/case-studies/" class="nav-link">Case Studies</a>
            <a href="/featured-insights/" class="nav-link">Featured Insights</a>
            <a href="/contact/" class="nav-link">Contact</a>
            <a href="/contact/" class="btn btn btn-outline btn-lg">Get Demo</a>
            <a href="/client-login/" class="nav-link" title="Client Login" style="display:inline-flex;align-items:center;justify-content:center;margin-right:0.5rem;padding:0.4rem 0.7rem;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
                    <circle cx="12" cy="8.5" r="4.5" stroke="#222"/>
                    <path d="M4 20c0-3.3137 3.134-6 8-6s8 2.6863 8 6" stroke="#222"/>
                </svg>
            </a>
        </div>
    </div>
</nav>
`;
  var navContainer = document.createElement('div');
    navContainer.innerHTML = navHtml;
    var navElem = navContainer.firstElementChild;
    document.body.insertBefore(navElem, document.body.firstChild);

    // Floating nav-menu on scroll
    var navMenu = navElem.querySelector('.nav-menu');
    var navHeader = navElem.querySelector('.nav-header');
    var logo = navElem.querySelector('.logo');
    var lastScrollY = window.scrollY;
    var floatingClass = 'nav-menu-floating';
    var floatingLogoClass = 'logo-floating-left';
    var hideLogoClass = 'logo-hide-floating';
    var navToggle = navElem.querySelector('.nav-toggle');
    var mobileNavActiveClass = 'nav-mobile-active';

    // Mobile nav toggle logic
    window.toggleMobileNav = function() {
        var isActive = navMenu.classList.toggle(mobileNavActiveClass);
        if (isActive) {
            logo.classList.add(hideLogoClass);
        } else {
            // Only show logo if not floating
            if (window.scrollY <= 40) {
                logo.classList.remove(hideLogoClass);
            }
        }
    };
    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            navMenu.classList.add(floatingClass);
            logo.classList.add(floatingLogoClass);
            logo.classList.add(hideLogoClass);
            navHeader.style.justifyContent = 'flex-start';
            navHeader.style.flexDirection = 'row';
            logo.style.marginRight = '2rem';
        } else {
            navMenu.classList.remove(floatingClass);
            logo.classList.remove(floatingLogoClass);
            // Only show logo if mobile nav is not active
            if (!navMenu.classList.contains(mobileNavActiveClass)) {
                logo.classList.remove(hideLogoClass);
            }
            navHeader.style.justifyContent = '';
            navHeader.style.flexDirection = '';
            logo.style.marginRight = '';
        }
    });
})();