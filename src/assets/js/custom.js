
$(document).ready(function() {
    $(".bar-list ul li a").click(function(){
        $(this).addClass("active");
    });
    $('#ham-menu').on("click", function() {
        $("#mySidenav").show();
        $("#mySidenav").css("width","263px");
    });
    $('#mySidenav .side-closebtn').on("click", function() {
        $("#mySidenav").hide();
        $("#mySidenav").css("width","0px");

    });

});

function openNav() {
    alert("ok");
    document.getElementById("mySidenav").style.width = "250px !important";
}
    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}