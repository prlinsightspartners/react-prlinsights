document.addEventListener('DOMContentLoaded', function(){
  var faqGrid = document.querySelector('.faq-grid');
  if (!faqGrid) return;
  var items = Array.from(faqGrid.querySelectorAll('.faq-item'));
  items.forEach(function(item){
    var q = item.querySelector('h3');
    var a = item.querySelector('p');
    if (!q || !a) return;
    // wrap question into a control row
    var qRow = document.createElement('div');
    qRow.className = 'faq-q';
    // move h3 into qRow
    qRow.appendChild(q);
    // add toggle button
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'faq-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Expand FAQ');
    qRow.appendChild(btn);
    // insert qRow at top of item
    item.insertBefore(qRow, item.firstChild);
    // move answer p into a wrapper
    var aWrap = document.createElement('div');
    aWrap.className = 'faq-a';
    aWrap.appendChild(a);
    item.appendChild(aWrap);

    // ensure initially closed
    item.classList.remove('open');
    aWrap.style.maxHeight = '0px';
    btn.setAttribute('aria-expanded', 'false');

    // click behavior with exclusive open (only one open at a time)
    function openItem(){
      var currentlyOpen = items.find(function(it){ return it.classList.contains('open'); });
      var willOpen = !item.classList.contains('open');
      // close any other open item
      if (currentlyOpen && currentlyOpen !== item) {
        currentlyOpen.classList.remove('open');
        var otherBtn = currentlyOpen.querySelector('.faq-toggle');
        var otherA = currentlyOpen.querySelector('.faq-a');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherA) otherA.style.maxHeight = '0px';
      }

      if (willOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        // set max-height dynamically for smoother animation
        aWrap.style.maxHeight = a.scrollHeight + 24 + 'px';
      } else {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        aWrap.style.maxHeight = '0px';
      }
    }
    qRow.addEventListener('click', openItem);
    btn.addEventListener('click', function(e){ e.stopPropagation(); openItem(); });

  });
});
