/**
 * Created by kammy on 4/18/2017.
 */

$(document).ready(function () {
    var selectedSize;
    var selectedColor;
    var selectedQuantity;

    $('#sizes').on('change',function () {
        selectedSize=$('input[name=sizes]:checked','#sizes').val();
    });
    $('#SelectColor').on('change',function () {
        selectedColor=$('input[name=color]:checked','#SelectColor').val();
    });
    $('#selectQuantity').on('change',function () {
        selectedQuantity=$('select[name=QtySelector]').val();

    });




    $('#next').on('click', function() {
        $('#shipaddress').show();
        $('#MainComponent').hide();
        $('#ModuleSelect').hide();
    });
    $('#back').on('click', function() {
        $('#shipaddress').hide();
        $('#maincomponent').show();
        $('#moduleselect').show();
    });
    $('#finish').on('click', function() {
        var address=$('#addOne').val();
        var address2=$('#addTwo').val();
        var cityfield=$('#city').val();
        var statefield=$('#state').val();
        var zipCode=$('#zipcode').val();


        $('#analyticsinfo').show();
        $('#tableofdetails').append('<tr><td>'+selectedSize+'</td><td>'+selectedColor+'</td><td>'+selectedQuantity+'</td></tr>')
        $('#ship-Address').append('<p>'+address+'</p><p>'+address2+'</p><p>'+cityfield+'</p><p>'+statefield+'</p><p>'+zipCode+'</p>')
    });

});