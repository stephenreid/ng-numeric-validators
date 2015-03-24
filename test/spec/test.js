describe('directives', function() {
  var $scope, form;
  beforeEach(module('ngNumericValidators'));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="form" novalidate="true">' +
      '<input ng-model="model.somenum" name="somenum" ng-min="2" ng-max="4"/>' +
      '</form>'
    );
    $scope.model = { somenum: null }
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('ng-min', function() {
    it('should pass with integer greater than 1', function() {
      form.somenum.$setViewValue('2');
      $scope.$digest();
      expect($scope.model.somenum).toEqual('2');
      expect(form.somenum.$valid).toBe(true);
    });

    it('should not pass with integer less than 2', function() {
      form.somenum.$setViewValue('1');
      $scope.$digest();
      expect(form.somenum.$valid).toBe(false);
    });
  });
  
  describe('ng-max', function() {
    it('should pass with integer less than 5', function() {
      form.somenum.$setViewValue('4');
      $scope.$digest();
      expect($scope.model.somenum).toEqual('4');
      expect(form.somenum.$valid).toBe(true);
    });

    it('should not pass with integer greater than 4', function() {
      form.somenum.$setViewValue('5');
      $scope.$digest();
      expect(form.somenum.$valid).toBe(false);
    });
  });
});
