import "../styles/universal.scss";

window.addEventListener('scroll', () => {
    var scrollHeight = window.pageYOffset / (document.querySelector("header").offsetHeight - window.innerHeight)
    var scrollHeightPercentage = scrollHeight > -1 ? scrollHeight : -1
    document.documentElement.style.setProperty('--scroll', Math.abs(scrollHeightPercentage));
  }, false);