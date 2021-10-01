    var f__countdown = null;
    var interval = null;
    window.addEventListener("load", () =>{
        var _seconds = 0 * 1000;
        var _minutes = 0 * 1000 * 60;
        var _hours = 0 * 1000 * 60 * 60;
        var _days = 100 * 1000 * 60 * 60 * 24;
        var milisegundos = _seconds + _minutes + _hours + _days;
        f__countdown = new Date(new Date().getTime() + milisegundos);
        setInterval(fnCountDown , 1000);
    });
    var fnCountDown = () => {
        var fecha_actual = new Date();
        var milisegundos = f__countdown - fecha_actual;
        var segundos = Math.floor(milisegundos /1000);

        var second = segundos % 60;
        var minute = Math.floor((segundos / 60) % 60);
        var hour = Math.floor((segundos / (60 * 60)) % (60 * 60) % 24);
        var day = Math.floor((segundos / (24 * 60 * 60)) % (60 * 60));

        document.querySelector('#second').innerHTML = ('0' + second).slice(-2);
        document.querySelector('#minute').innerHTML = ('0' + minute).slice(-2);
        document.querySelector('#hour').innerHTML = ('0' + hour).slice(-2);
        document.querySelector('#day').innerHTML = ('0' + day).slice(-2);
    }

$(document).ready(function () {
    $('.icono-chat').click(function(){
        $(".modal-section").css("display","block");
    })
    $('.exit').click(function(){
        $(".modal-section").css("display","none")
    })
});
    