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
var app = angular.module('ngApp', [
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
   <card-header img-src
                card-title
                card-subtitle>
   </card-header>
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
    </card-action>
</ng-card>
```

## Attributes:

`<card-header>`
- `img-src`: Sets the avatar. This attribute is not necessary, the header could not have an image.
- `card-title`: Sets the title of the header. (If this attributes is undefined, the `<card-header>` tag will be remove)
- `card-subtitle`: Sets the subtitle of the header.

`<card-img>`
- `img-src`: Sets the img on the card, in case is not defined the tag `<card-img>` will be remove.
- `img-title`: Sets the title of the image. (This attribute is not required)

`<card-content>`
- `card-icon`: Sets the main card icon
- `card-title`: Sets the main title of the card. (If `img-title` is defined, you can leave this attribute empty)
- `card-text`: Sets the text in your card. (HTML code is accepted)

`<card-button>`
- `btn-title`: Sets the title of your link/button
- `data-ng-click`: It sets the function to be executed on-click. (If this attribute is completed, the `btn-src` tag will be useless)
- `btn-src`: In case `data-ng-click` is undefined, this attribute will be the alternative attribute for the button.


## Tips
- To align the buttons on the right, simply add the `right-btns` class to the `<card-action>` tag-

```html
<card-action class="right-btns">
```

- To make stacked buttons, add the `stack-btns` class to the `<card-action>` tag
```html
<card-action class="stack-btns">
```

- The buttons are left aligned by default, even with the `stack-btns` classes. Cause of this, you can use both classes

```html
<card-action class="right-btns stack-btns">
```

- Limit the `<card-action>` tag to two buttons.

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

Card with Header and Image:
```html
<ng-card ng-controller="exampleCtrl as ex">
   <card-header img-src="img/profile.png"
                card-title="This is a title"
                card-subtitle="With a brand subheader">
   </card-header>   
   <card-img img-src="img/emma2.jpg">
   </card-img>
   <card-content card-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.">
   </card-content>
   <card-action class="right-btns">
      <card-button btn-title="Show alert"
                   ng-click="ex.showAlert()">
      </card-button>
   </card-action>
</ng-card>
```

## License
This seed is released under permissive MIT License.