/* global Rectangle: true */
$(function() {
    var $width=$('#width'),
    $height=$('#height'),
    $btnCal=$('#calcute'), 
    $perimeter=$('#perimeter'),
    $area=$('#area');
    $btnCal.click(function(){
          var w = $width.val(),
              h = $height.val();
        var r = new Rectangle(w,h);
        $perimeter.val(r.perimeter());
            $area.val(r.area());
              
    });

});
