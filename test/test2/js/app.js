(function () {
  'use strict';

  angular.module('ShoppingListCheckOff' ,[])
  .controller('ToBuyShoppingController ',ToBuyShoppingController )
  .cotroller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyShoppingController.$inject =['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];


  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var buy =this;
    buy.items=ShoppingListCheckOffService.GetItemsToBuy();
    buy.buyItem=function (index) {
      ShoppingListCheckOffService.buyItem(index);

    };

  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought=this;
    bought.items=ShoppingListCheckOffService.GetBoughtItems();
  };
  function ShoppingListCheckOffService() {
    var service =this;
    var toBuyItems=[
      {name:'Milk' ,quantity:"10"},
      {name:'cookies' ,quantity:"100"},
      {name:'pizza' ,quantity:"2"},
      {name:'burger' ,quantity:"5"},
      {name:'soda' ,quantity:"6"}
    ];

    var boughtItems=[];

    service.GetItemsToBuy=function () {
      return toBuyItems;
    };

    servie.GetBoughtItems=function () {
      return boughtItems;
    };
    service.buyItem =function (itemIndex) {
      var item =toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex,1);
    };
  };
})();
