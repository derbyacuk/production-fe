import $ from 'jquery'
import 'selectric'
import 'icheck'
import whatInput from 'what-input'


$('.form-ui select').selectric({ responsive: true });

$('.form-ui input').iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
});

$('.subject-select').change(function(){
    var selected = $(this).val(),
    selectedId = $(this).attr('id');
    $('.subject-select').each(function(){
        if(selected == $(this).val() && selectedId != $(this).attr('id')){
            // console.log($(this).val() + ' duplicated');
            $('option:selected', this).prop("selected", false);
            $(this).selectric('refresh');
        }
    });
});
