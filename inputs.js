$(function () {
    'use strict';
    
    $('.input').on('change', checkbox);
    
    function checkbox ()
    {
        if($('#checkbox').is(':checked')){
            var cbData = $('#checkbox').prop('checked',true)
        }
    }
    
    function outputs (){
        var output = $(this).val
    }
}








