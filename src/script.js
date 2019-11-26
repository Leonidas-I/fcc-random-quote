import $ from 'jquery';
import 'bootstrap';
import './style.scss';
import './fontawesome5';

const colors = ['#0040ff', '#00cc99', '#00ffff', '#bb33ff', '#ff0066', '#ff3300', '#669900', '#663300', '#e6e600', '#0099ff', '#ff00ff', '#ffcc00', '#ff3333', '#666699', '#00b300'];

const apilink = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
const quote = (data) => {
  $("#textquote").text(data.quoteText);
  $("#author").text(data.quoteAuthor);
  const tweet = "https://twitter.com/intent/tweet?text=" + '"' + data.quoteText + '"' + ' ' + data.quoteAuthor;
  $("#twitter-button").attr("href", tweet);
  if (data.quoteAuthor == "") {
    $("#author").text("NoName");
  }
}

function getQuote() {
  const color = Math.floor(Math.random() * colors.length);
  $(".btn").css("color", "white");
  $("body").css("background-color", colors[color]);
  $(".btn").css("background-color", colors[color]);
  $(".fa-minus, .fa-quote-left, .fa-quote-right").css("color", colors[color]);
  $(".fa-quote-right, .fa-quote-left").css("font-size", "50px");
  $("#textquote, #author").css("color", colors[color]);
  
  $.getJSON(apilink, quote, 'jsonp');
}

function openlink(){
  $("#facebook-button").attr("href", "https://facebook.com");
  $("#github-button").attr("href", "https://github.com");
  $("#linkedin-button").attr("href", "https://linkedin.com");
 }

document.addEventListener('DOMContentLoaded', () => {
  getQuote();
  $("#newquote-button").on("click", getQuote);
  $("#searchbox").keydown((event) => {
    if (event.keyCode === 13) {getQuote}
  });    
  $("#twitter-button, #facebook-button, #github-button, #linkedin-button",).on("click", openlink);
});
