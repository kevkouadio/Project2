$(document).ready(function() {

    $(document).on("click", 'button.delete', deleteOrder); 
        // This function does an API call to delete posts
        function deleteOrder() {
          var listItemData = $(this).parent("td").parent("tr").data("orders");
          var id = listItemData;
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

