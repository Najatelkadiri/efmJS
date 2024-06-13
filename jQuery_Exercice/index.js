document.getElementById("btn-hide").addEventListener("click",function(){
    $(".title-2").hide() //fhal display none.
    $(this).css("color","blue")
    $(this).hide()


})
document.getElementById("btn-show").addEventListener("click",function(){
    $(".title-2").show() //fhal display none.
    $("#btn-hide").show()
    $('#btn-show').addClass('title1')
  
})




$(document).ready(function(){
    $("#btn-jouter").click(function(){
        console.log("you cliked this btn")
    })
})
$('#modifie').on



//addclass()
//removeclass()
//attr()