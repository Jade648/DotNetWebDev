$(function(){
  $('#birthday').pickadate({ format: 'mmmm, d' });
});
$('.form-check-input').each(function () {
  $(this).prop('checked', false);
});
$('.form-check-input').on('change', function () {
  // make the image visible
  $('#' + this.id + 'Img').css('visibility', 'visible')
  // animate balloon in/out based on checkbox
  $(this).is(':checked') ?
   $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
   $('#' + this.id + 'Img').addClass('animated bounceOutUp');
});
