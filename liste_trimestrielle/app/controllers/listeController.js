app
    .controller('listeController', ['$scope', function($scope){
        var monthNames = [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],

            firstQuarter = monthNames.slice(0, 3),  // récupération des noms des mois pour chaque trimestre
            secondQuarter = monthNames.slice(3, 6),
            thirdQuarter = monthNames.slice(6, 9),
            fourthQuarter = monthNames.slice(9, 12),

            objDate = new Date();

        function formatDate(value){ // fonction permettant de formater la date sous la forme d/M/y
            return value.getDate() + "/" + (value.getMonth()+1) + "/" + value.getFullYear();
        }

        $scope.date = formatDate(objDate); // récupération de la date du jour

        $scope.visibility = 10; // initialisation de la visibilité sur 10 ans

        $scope.fillOptions = function(){ // fonction permettant de créer et remplir le tableau options sur lequel on itère dans la vue pour créer la liste dérouolante

            var actualYear = parseInt($scope.date.split('/')[2]), // récupération de l'année actuelle
                actualMonth = monthNames[parseInt($scope.date.split('/')[1])-1], // récupération du mois en cours

                annees = [];

            for(var i = actualYear; i <= actualYear + $scope.visibility; i++){ // on remplit le tableau annees permettant d'avoir une visibilité depuis l'année en cours jusqu'à un nombre N d'années (N étant définit dans $scope.visibility)
                annees.push(i);
            }

            $scope.options = [];

            for(var i = 0; i <= $scope.visibility; i++){ // on remplit le tableau $scope.options en prenant soin de ne pas ajouter le trimestre en cours si on est dans le dernier mois du trimestre
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