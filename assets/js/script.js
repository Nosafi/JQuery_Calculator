$x = 0;
$y = 0;

$('#bnt_1').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "1");
});

$('#bnt_2').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "2");
});

$('#bnt_3').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "3");
});

$('#bnt_4').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "4");
});

$('#bnt_5').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "5");
});

$('#bnt_6').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "6");
});

$('#bnt_7').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "7");
});

$('#bnt_8').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "8");
});

$('#bnt_9').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "9");
});

$('#bnt_0').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + "0");
});

$('#bnt_dot').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val() + ".");
});

$('#bnt_C').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val("");
    $('#display_min').val("");
});

$('#bnt_correct').click(function(){
    $('#click_sound')[0].play();
    $('#display_max').val($('#display_max').val().substring(0,
         $('#display_max').val().length - 1));
});

$('#bnt_sum').click(function(){
    $('#click_sound')[0].play();
    $x = $('#display_max').val();
    $('#display_min').val($('#display_max').val() + "+");
    $('#display_max').val("");
});

$('#bnt_min').click(function(){
    $('#click_sound')[0].play();
    $x = $('#display_max').val();
    $('#display_min').val($('#display_max').val() + "-");
    $('#display_max').val("");
});

$('#bnt_mul').click(function(){
    $('#click_sound')[0].play();
    $x = $('#display_max').val();
    $('#display_min').val($('#display_max').val() + "*");
    $('#display_max').val("");
});

$('#bnt_deg').click(function(){
    $('#click_sound')[0].play();
    $x = $('#display_max').val();
    $('#display_min').val($('#display_max').val() + "/");
    $('#display_max').val("");
});

$('#bnt_percent').click(function(){
    $('#click_sound')[0].play();
    $x = $('#display_max').val()/100;
    $('#display_min').val($x + "*");
    $('#display_max').val("");
});

$('#bnt_val').click(function(){
    $('#click_sound')[0].play();
    $x = $('#display_max').val();
    $('#display_max').val("");
    $('#display_max').val($x * -1);
});

$('#bnt_eq').click(function(){
    $('#click_sound')[0].play();
    $y = $('#display_max').val();
    $('#display_min').val($('#display_min').val() 
        + $('#display_max').val());
    $('#display_max').val("");
    $('#display_max').val(eval($('#display_min').val()));
    $('#display_min').val($('#display_min').val() + "=");
});