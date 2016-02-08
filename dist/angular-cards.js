/*!
 * author: Nestor Paez
 * version: 0.0.1
 * license: MIT
 * homepage: http://github.com/npaez/angular-cards
 */
'use strict';
angular.module('angular-cards', [])
.directive('cardHeader', function($compile) {
   return {
      restrict: 'E',
      scope: {
         imgSrc: '@'
      },
      link: function(scope, element, attrs) {
         if(attrs.imgSrc != undefined) {
            element.find('span').css('margin-left', '55px');
            element.find('h4').css('margin-left', '55px');
         } else {
            element.find('img').remove();
         };

         if(!attrs.cardTitle) {
            element.find('div').remove();
         } else {
            attrs.$observe('cardTitle', function(value){
               element.find('h4').text(value);
            });

            if(attrs.cardSubtitle != undefined) {
               attrs.$observe('cardSubtitle', function(value){
                  element.find('span').text(value);
               });
            };
         };
      },
      template: '<div class="card-header">'
               +   '<img class="img-src" ng-src="{{ imgSrc }}">'
               +   '<h4 class="card-title"></h4>'
               +   '<span class="card-subtitle"></span>'
               +'</div>'
   };
})
.directive('cardImg', function() {
   return {
      restrict: 'E',
      scope: {
         imgSrc: '@',
         imgTitle: '@'
      },
      link: function(scope, element, attrs) {
         /*!
          * If imgSrc is undefined, erase the div
          */
         if(!attrs.imgSrc) {
            element.find('span').remove();
            element.find('div').remove();
         };
      },
      template: '<div class="card-img">'
               +   '<img ng-src="{{ imgSrc }}">'
               +   '<span class="card-title">{{ imgTitle }}</span>'
               +'</div>'
   };
})
.directive('cardContent', function() {
   return {
      restrict: 'E',
      replace: true,
      link: function(scope, element, attrs) {
         /*!
          * Sets the title
          */
         attrs.$observe('cardTitle', function(value){
             element.find('span').text(value);
         });

         /*!
          * Sets the card text
          */
         attrs.$observe('cardText', function(value){
             element.find('p').html(value);
         });

         if('cardIcon' in attrs) {
            attrs.$observe('cardIcon', function(value){
                element.find('i').html(value);
                element.find('span').css('padding-left', '48px');
                element.find('span').css('margin-top', '-1px');
                element.find('p').css('padding-left', '48px');
            });
         };
      },
      template: '<div class="card-content">'
               +   '<div class="icon-inner"><i></i></div>'
               +   '<span class="card-title"></span>'
               +   '<p class="card-text"></p>'
               +'</div>'
   };
})
.directive('cardButton', function($compile) {
   return {
      restrict: 'E',
      replace: true,
      scope: {
         btnTitle: '@',
         eventHandler: '&ngClick',
         btnSrc: '@'
      },
      link: function(scope, element, attrs) {
         if(!attrs.btnSrc) {
            /*!
             * Since its has no source, it assumes that you are using a function.
             */
            element.replaceWith($compile('<a ng-click="eventHandler()" class="clickleable">{{ btnTitle }}</a>')(scope));
         } else {
            /*!
             * In this case, you are using a common <a> tag
             */
            element.replaceWith($compile('<a ng-href="{{ btnSrc }}">{{ btnTitle }}</a>')(scope));
         };
      }
   };
});