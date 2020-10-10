$(document).ready(function () {
    //Add menu item to order
    $(".btn-primary").on("click", function(event) {
    event.preventDefault();
    var orderLi = $("<li>");
    var orderBtn = $("<button>");
    orderBtn.addClass("btn-danger");
    orderBtn.text("x");
    var newOrder = $(this).text();
    var orderItem = orderLi.append(newOrder);
    var oItem = orderItem.append(orderBtn);

        $('#yOrder').append(oItem);
      }
    );
    //Delete item from menu 
    $(".btn-danger").live("click", function(event) {
        $(this).parent().remove();
    });
});
