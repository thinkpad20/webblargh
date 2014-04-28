/// <reference path='../../_references.ts' />

function main() {
  $('.menu-mouseover-show').hover(function() {
    $('ul', this).css('display', 'auto');
  }, function() {
    $('ul', this).css('display', 'none');
  })
}

$(document).ready(main);
