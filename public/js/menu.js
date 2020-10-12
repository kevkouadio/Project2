$(document).ready(function () {
    //Add menu item to order
    $(".btn-primary").on("click", function(event) {
    event.preventDefault();
    var orderLi = $("<li>");
    var orderBtn = $("<button>");
    orderBtn.addClass("btn-danger");
    orderBtn.append('<i style="font-size:18px" class="fa">&#xf014;</i>');
    var newOrder = $(this).text();
    var orderItem = orderLi.append(newOrder);
    var oItem = orderItem.append(orderBtn);

        $('#orderItems').append(oItem);
      }
    );
    //Delete item from menu 
    $(".btn-danger").live("click", function(event) {
        $(this).parent().remove();
    });
    // 
    $(".btn-success").on("click", function() {
        sendOrder();
        $("#oDiv").empty();
        $("#oDiv").append("<h3>Your Order has been submited!<h3>")

       });

});

function sendOrder(order) {
    var content = $("#orderItems");
        var orderName = $('#Name');
    var order = {customerName: orderName.val().trim(), order: content.text()};
    //console.log(order);
    $.post("/api/orders", order);
}

