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

    import {
        categorySection,
        categoryName,
        menu
    } from 'layouts/menu.handlebars';
    import { itemsList } from 'layouts/menu.handlebars';
    import {
        itemContainer,
        name, 
    } from 'layouts.menu.handlebars';

    const { string } = PropTypes;


    //Delete item from menu 
    $(".btn-danger").live("click", function(event) {
        $(this).parent().remove();
    });
});
