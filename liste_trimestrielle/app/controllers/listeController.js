app
    .controller('listeController', ['$scope','dateFactory','optionsFactory', function($scope, dateFactory, optionsFactory){
        
        $scope.date = dateFactory.format(); // recuperation de la date du jour dans un format exploitable

        $scope.visibility = 10; // initialisation de la visibilite sur 10 ans
        
        $scope.refreshList = function(){
            $scope.options = optionsFactory.fill($scope.date, $scope.visibility); // on remplit le tableau options en fonction de la visibilite et de la date
        };
        
        $scope.refreshList();

    }]);