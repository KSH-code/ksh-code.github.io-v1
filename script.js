$(function() {
  $('.link-table tr').click(function() {
    if($(this).data('url'))
      window.open($(this).data('url'), "_blank");
  })
})