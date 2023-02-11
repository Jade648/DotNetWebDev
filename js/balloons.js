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

function RandomizeAnimations(){
  let randomValue = animations(Math.floor(Math.random()*animations.length));
  var animations=[
    
    "animate_animated animate_bounce",
    "animate_animated animate_wobble",
    "animate_animated animate_flash",
    "animate_animate animate_swing",
    "animate_animated animate_heartbeat",
    "animate_animated animate_pulse",
    "animate_animated animate_tada"

  ];

  var randomOrder = animations.randomize();
  alert("This will be the order:/n-"+randomOrder)

}

 function uncheckAll(){

  document.querySelectorAll('input [type ="checkbox"]')
  .forEach(el => el.checked = false);

 }
 document.querySelector('button').addEventListener('click',uncheckAll)

$('.submit').on('click', function(e) {
  if("no balloons checked"){
  e.preventDefault();
  // first pause the audio (in case it is still playing)
  toast.show();
  // reset the audio
  toast.currentTime = 0;
  // play audio
  toast.Hide();
  $('#toast').toast({ autohide: false }).toast('show');   
  }
});
