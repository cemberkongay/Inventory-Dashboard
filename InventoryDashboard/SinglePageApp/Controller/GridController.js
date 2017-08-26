var GridController = function ($scope, $uibModal) {
    $scope.data = {
        inventoryData: {
            totalitems: 726,
            currentPage: 1,
            itemsperpage: 10,
            data: []
        }
    };

    function GetData() {
        $scope.data.inventoryData.data = [];
        for (i = 0; i < $scope.data.inventoryData.itemsperpage; i++) {
            var currentLocation = $scope.selectedLocation.Location;

            var rndNum = ($scope.data.inventoryData.currentPage * 10) + i;

            $scope.data.inventoryData.data.push({
                Item: "Item" + rndNum,
                ProductTitle: "Product Title " + rndNum,
                OnOrder: rndNum * 2,
                Due: rndNum - 1,
                InventoryLevel: rndNum,
                Location: currentLocation
            });
        }
    }

    GetData();

    $scope.pageChanged = function () {
        GetData();
    }

    $scope.$watch('selectedLocation', function () {
        $scope.data.inventoryData.currentPage = 1;
        GetData();
    });


    $scope.openProduct = function (product) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/SinglePageApp/View/Product.html',
            controller: 'ProductController',
            size: "",
            resolve: {
                data: product
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.data.inventoryData.selectedItem = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

}

GridController.$inject = ['$scope', '$uibModal'];