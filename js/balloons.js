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
   $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
   $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

function Checkall(){
  var items= document.getElementsByName('btn-group');
  {
    if(items[i].type=='checkbox')
    items[i].checked=true;
  }
}
$('.submit').on('click', function(e) {
  e.preventDefault();
  // first pause the audio (in case it is still playing)
  toast.show();
  // reset the audio
  toast.currentTime = 0;
  // play audio
  toast.Hide();
  $('#toast').toast({ autohide: false }).toast('show');   
});
