$(document).ready(function() {
  // This function does an API call to delete posts
    $(".delete").on("click", function (){ 
        var id = $(this).parent().find('#number').text();
        // var id = $("#number").val();
        // if (id=== $("#number").val()) {
         
        // }
    $.ajax({
      type: "DELETE",
      url: "/api/orders/" + id,
    })
      .then(location.reload());
    });
    //reload orders page every 10s
    setTimeout(function() {
      location.reload();
    }, 10000);
})
