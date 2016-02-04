/*!
 * author: Nestor Paez
 * version: 0.0.1
 * license: MIT
 * homepage: http://github.com/npaez/angular-cards
 */
'use strict';
angular.module('angular-cards', [])
.directive('ngCard', function(){
   return {
      restrict: 'E',
      replace: true,
      scope: {
         imgSrc: "@",
         cardTitle: "@",
         cardBody: "@",
         primaryBtn: "@",
         primaryUrl: "@",
         secondaryBtn: "@",
         secondaryUrl: "@"
      },
      link: function($scope, element, attrs) {
         /*!
          * remove title in card if theres an image or removes the ng-card-img div
          */
         if(attrs.imgSrc != undefined) {
            element.find('card-title').remove();
         } else {
            element.find('ng-card-image').remove();
         }

         /*!
          * if no primary-btn attrs, remove the cards buttons div.
          */
         if(attrs.primaryBtn == undefined) {
            element.find('card-button').remove();
         }

         /*!
          * set buttons to the right or left (default)
          */
         if(attrs.rightBtns == 'true') {
            element.find('card-button').css('text-align', 'right');
            element.find('a').css('margin-left', '20px');
            element.find('a').css('margin-right', '0');
         } else {
            element.find('card-button').css('text-align', 'left');
            element.find('a').css('margin-left', '0');
            element.find('a').css('margin-right', '20px');
         }
      },
      template: '<div class="ng-card">'
               +   '<ng-card-image class="ng-card-image">'
               +      '<img ng-src="{{ imgSrc }}"/>'
               +      '<card-title-img class="ng-card-title">{{ cardTitle }}</card-title-img>'
               +   '</ng-card-image>'
               +   '<div class="ng-card-content">'
               +      '<card-title class="ng-card-title">{{ cardTitle }}</card-title>'
               +      '<card-body>{{ cardBody }}</card-body>'
               +   '</div>'
               +   '<card-button class="ng-card-action">'
               +      '<a ng-href="{{ primaryUrl }}">{{ primaryBtn }}</a>'
               +      '<a ng-href="{{ secondaryUrl }}">{{ secondaryBtn }}</a>'
               +   '</card-button>'
               +'</div>'
   };
});