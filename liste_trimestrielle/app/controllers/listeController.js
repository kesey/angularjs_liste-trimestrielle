app
    .controller('listeController', ['$scope', function($scope){
        var monthNames = [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],

            firstQuarter = monthNames.slice(0, 3),
            secondQuarter = monthNames.slice(3, 6),
            thirdQuarter = monthNames.slice(6, 9),
            fourthQuarter = monthNames.slice(9, 12),

            objDate = new Date();

        function formatDate(value){
            return value.getDate() + "/" + (value.getMonth()+1) + "/" + value.getFullYear();
        }

        $scope.date = formatDate(objDate);

        $scope.visibility = 10;

        $scope.fillOptions = function(){
            var actualYear = parseInt($scope.date.split('/')[2]),
                actualMonth = monthNames[parseInt($scope.date.split('/')[1])-1],

                annees = [];

            for(var i = actualYear; i <= actualYear + $scope.visibility; i++){
                annees.push(i);
            }

            $scope.options = [];

            for(var i = 0; i <= $scope.visibility; i++){
                if(actualMonth === firstQuarter[2] && actualYear === annees[i]){
                    var obj2 = {year: annees[i], quarter: secondQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    $scope.options.push(obj2, obj3, obj4);
                } else if(actualMonth === secondQuarter[2] && actualYear === annees[i]){
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    $scope.options.push(obj1, obj3, obj4);
                } else if(actualMonth === thirdQuarter[2] && actualYear === annees[i]){
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj2 = {year: annees[i], quarter: secondQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    $scope.options.push(obj1, obj2, obj4);
                } else if(actualMonth === fourthQuarter[2] && actualYear === annees[i]){
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj2 = {year: annees[i], quarter: secondQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter};
                    $scope.options.push(obj1, obj2, obj3);
                } else {
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj2 = {year: annees[i], quarter: secondQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    $scope.options.push(obj1, obj2, obj3, obj4);
                }
            }
        }

        $scope.fillOptions();

    }]);