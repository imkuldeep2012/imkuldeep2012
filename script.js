// Get the current page views count from local storage
let pageViewsCount = localStorage.getItem('pageViews') || 0;

// Update the page views display
document.getElementById('count').innerText = pageViewsCount;

// Increment the page views count and update local storage on page load
pageViewsCount++;
localStorage.setItem('pageViews', pageViewsCount);
