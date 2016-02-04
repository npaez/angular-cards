# angular-cards
Angular directives to create material design cards (Always under development)


## Demo
Check out the demo [here](http://npaez.github.io/angular-cards/demo/).

## Getting Started
Include both `angular-cards.js` and `angular-cards.css` in your project.

```html
<link href="path/to/angular-cards.css" rel="stylesheet">
```

```html
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
<html ng-app="ngApp">
...
<body>
```

## How To Use angular-cards
Basic structure:

```html
<ng-card></ng-card>
```

Attributes:
- `card-title`: Sets the title of your card.
- `card-body`: Here goes the main text.
- `img-src`: To add an image, just indicate its source.
- `primary-btn` and `secondary-btn`: Sets the name of the button.
- `primary-url` and `secondary-url`: Indicates the url.
- `right-btns`: Alight the position of the buttons (false by default)

## Example

Default Card Example:
```html
<ng-card card-title="Default Card Example"
         card-body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat."
         primary-btn="go to google.com"
         primary-url="http://google.com"
         secondary-btn="i'm a link"
         secondary-url="#">
</ng-card>
```

Card with Image Example:
```html
<ng-card card-title="Pro Image Card"
         card-body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat."
         img-src="img/emma.jpg"
         primary-btn="go to google.com"
         primary-url="http://google.com"
         secondary-btn="i'm a link"
         secondary-url="#">
</ng-card>
```

## License
This seed is released under permissive MIT License.
