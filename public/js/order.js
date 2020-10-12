$(document).ready(function() {

    $(document).on("click", 'button.delete', deleteOrder); 
        // This function does an API call to delete posts
        function deleteOrder() {
        var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/orders/" + id, 
    })
      .then(getOrders);
    }

  function getOrders() {
    $.get("/api/orders")
  }

})