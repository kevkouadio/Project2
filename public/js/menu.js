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
    //Display order submited message 
    $(".btn-success").on("click", function() {
        sendOrder();
        //condition to avoid empty order
        if ($("#Name").val()==="" || $("#Name").val()===" ") {
            $("#oDiv").append("<h5>Please enter your name before submiting your order!<h5>");
        }
        else 
        {
        $("#oDiv").empty();
        $("#oDiv").append("<h3>Your order has been submited!<h3>")
        }
       });

});
//post order items (name of customer and dishes) 
function sendOrder(order) {
    var content = $("#orderItems");
        var orderName = $('#Name');
    var order = {customerName: orderName.val().trim(), order: content.text().trim()};

    $.post("/api/orders", order);
}

