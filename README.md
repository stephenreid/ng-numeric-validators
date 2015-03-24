# ng-numeric-validators
Numeric validators for angular.

Add ngmin and ngmax to a standard number input. Validated by $valid.

### Installation
```bash
npm install
bower install https://github.com/stephenreid/ng-numeric-validators.git
```
update your index.html with (if your gruntfile doesn't do this for you)

```html
<script src="bower_components/ng-numeric-validators/ng-numeric-validators.js"></script>
```

### Implementation
Add ng-min and / or ng-max to your standard inputs with type="number"

The following example will not be valid with a value < 1 or > 4
```html
<input type="number" ng-min="1" ng-max="4">
```

### Testing
Basic testing implementing with Karma.
To test, run 
```bash
grunt test
```
Based on the artcile avaialble at http://web-profile.com.ua/angularjs/dev/angularjs-ng-min-ng-max/
