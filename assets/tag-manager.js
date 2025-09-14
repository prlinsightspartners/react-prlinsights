// Injects all tag manager, analytics, and tracking codes into <head>
(function() {
  var head = document.getElementsByTagName('head')[0];
  if (!head) return;

  // Google Tag Manager
  var gtmScript = document.createElement('script');
  gtmScript.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W36C277L');";
  head.appendChild(gtmScript);

  // Google Analytics (gtag.js)
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-G7XB3T6CTJ';
  head.appendChild(gaScript);

  var gaConfigScript = document.createElement('script');
  gaConfigScript.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-G7XB3T6CTJ');";
  head.appendChild(gaConfigScript);

  // Amplitude Analytics
  var amplitudeScript = document.createElement('script');
  amplitudeScript.src = 'https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz';
  head.appendChild(amplitudeScript);

  var amplitudeReplayScript = document.createElement('script');
  amplitudeReplayScript.src = 'https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz';
  head.appendChild(amplitudeReplayScript);

  var amplitudeInitScript = document.createElement('script');
  amplitudeInitScript.innerHTML = "window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));window.amplitude.init('2809a30eaa5fd974300af2dc12514151', {\"autocapture\":{\"elementInteractions\":true}});";
  head.appendChild(amplitudeInitScript);
})();
