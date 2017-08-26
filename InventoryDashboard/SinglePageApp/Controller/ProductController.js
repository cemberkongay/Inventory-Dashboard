var ProductController = function ($scope, $uibModalInstance, data) {
    $scope.selectedProduct = data;

    $scope.labels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
}