let theme = 'light';

function toggleTheme() {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  document.body.className = theme;
}

function reloadIframe() {
  document.querySelector('iframe').src = document.querySelector('iframe').src;
}