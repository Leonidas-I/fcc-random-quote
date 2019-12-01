import $ from 'jquery';
import 'bootstrap';
import './style.scss';
import './fontawesome5';

const colors = ['#0040ff', '#00cc99', '#6666ff', '#aa00ff', '#e6005c', '#e62e00', '#669900', '#663300', '#66ccff', '#0099ff', '#ff9966', '#cc00cc', '#ff1a1a', '#666699', '#00b300'];

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
 getQuote();

document.addEventListener('DOMContentLoaded', () => {
  $("#newquote-button").tooltip({
    title: "You can use Space or Enter after button clicked",
    delay: {show: 100, hide: 100},
    trigger: 'hover',
    placement: 'right'
  });
  $("#newquote-button").on("click", getQuote);
  $("#newquote-button").keydown((event) => {
    if (event.keyCode === 13 || 32) {getQuote}
  });    
  $("#twitter-button, #facebook-button, #github-button, #linkedin-button",).on("click", openlink);
});
