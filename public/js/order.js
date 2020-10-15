$(document).ready(function() {
  // This function does an API call to delete posts
    $(".delete").on("click", function (){ 
        var id = $(this).parent().find('#number').text();
        
    $.ajax({
      type: "DELETE",
      url: "/api/orders/" + id,
    })
      location.reload();
    });
    //reload orders page every 10s
    setTimeout(function() {
      location.reload();
    }, 10000);
})
