# angular-cards
Angular directives to create material design cards (Always under development)


## Demo
Check out the demo [here](http://npaez.github.io/angular-cards/demo/).

## Getting Started
Include both `angular-cards.js` and `angular-cards.css` in your project.

```html
<link href="path/to/angular-cards.css" rel="stylesheet">

<script src="path/to/angular-cards.js"></script>
```

Specify angular-cards as a dependency of your Angular module.

```js
var app = angular.module('exampleApp', [
   'angular-cards'
]);
```
Use it in your project.

```html
<body ng-app="ngApp">
   <!-- code goes here... -->
<body>
```

## How To Use angular-cards
Basic structure:

```html
<ng-card>
   <card-img img-src
             img-title>
   </card-img>
   <card-content card-title
                 card-text>
   </card-content>
   <card-action>
      <card-button btn-title
                   data-ng-click
                   btn-src>
      </card-button>
</ng-card>
```

## Attributes:

`<card img>`
- `img-src`: Sets the img on the card, in case is not defined the tag `<card-img>` will be remove.
- `img-title`: Sets the title of the image (and card)

`<card-content>`
- `card-title`: Sets the main title of the card. (If `img-title` is defined, you can leave this attr without empty)
- `card-text`: Sets the text in your card. (html code is accepted)

`<card-button>`
- `btn-title`: Sets the title of your link/button
- `data-ng-click`: It sets the function to be executed on-click. (If this attribute is completed, the `btn-src` tag will be useless)
- `btn-src`: In case `data-ng-click` is undefined, this attribute will be the alternative attribute for the button.


## Tips
- To align the buttons on the right, simply add the `right-btns` class to the `<card-action>` tag-

```html
<card-action class="right-btns">
```


## Example

Default Card Example:
```html
<ng-card>
   <card-content card-title="Using ng-click()"
                 card-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.">
   </card-content>
   <card-action>
      <card-button btn-title="Fire Action"
                   ng-clicK="showAlert()">
      </card-button>
   </card-action>
</ng-card>
```

Card with Image Example:
```html
<ng-card>
   <card-img img-src="img/emma.jpg"
             img-title="Card with image">
   </card-img>
   <card-content card-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation.">
   </card-content>
   <card-action class="right-btns">
      <card-button btn-title="Fire alert"
                   data-ng-click="showAlert()">
      </card-button>
      <card-button btn-title="Go to repository"
                   btn-src="https://github.com/npaez/angular-cards">
      </card-button>
   </card-action>
</ng-card>
```

## License
This seed is released under permissive MIT License.
