// case-studies-data.js
// Loads case studies data from JSON file for use in browser and Node.js

let caseStudies = [];

// Browser: fetch JSON data asynchronously
if (typeof window !== 'undefined') {
  fetch('case-studies-data.json')
    .then(res => res.json())
    .then(data => {
      caseStudies = data;
      // If a callback is set (for dynamic rendering), call it
      if (typeof window.onCaseStudiesDataLoaded === 'function') {
        window.onCaseStudiesDataLoaded(caseStudies);
      }
    });
}

// Node.js/CommonJS: require JSON
if (typeof module !== 'undefined') {
  caseStudies = require('./case-studies/case-studies-data.json');
  module.exports = caseStudies;
}
