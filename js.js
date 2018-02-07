$(document).ready(function() {
    
    $('button').click(function(){
        if(($('#min_val').val())<($('#max_val').val())){
            console.log($('.slider').val());
            $('.slider').attr('min',[$('#min_val').val()]);
            $('.slider').attr('max',[$('#max_val').val()]);
            $('#min_val').val('');
            $('#max_val').val('');
            $('.slider').removeAttr('disabled');
            $(".slider").on("input change", function() {
            var val = $(".slider").val();
            var grad = "linear-gradient(to top,#355C7D,#C06C84 " + val + "%, #6C5B7B)";
            $("#multi-colour").css("background", grad);
            });
            $('.slider').hover(function(){
                $('.slider').attr('title',[$(".slider").val()]);
            });
        }
        else if(($('#min_val').val())>($('#max_val').val())){
            alert ("Please enter the values once again"); 
            $('.slider').attr('disabled','');
            $('#min_val').val('');
            $('#max_val').val('');
        }
    });  
        
});