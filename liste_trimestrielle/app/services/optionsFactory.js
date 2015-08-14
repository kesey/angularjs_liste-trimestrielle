app
    .factory("optionsFactory", function(){
        var optionsFactory = {};

        optionsFactory.fill = function(date, visibility){ 
            var monthNames = [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],

                firstQuarter = monthNames.slice(0, 3),  // recuperation des noms des mois pour chaque trimestre
                secondQuarter = monthNames.slice(3, 6),
                thirdQuarter = monthNames.slice(6, 9),
                fourthQuarter = monthNames.slice(9, 12),
            
                actualYear = parseInt(date.split('/')[2]), // recuperation de l'annee actuelle
                actualMonth = monthNames[parseInt(date.split('/')[1])-1], // recuperation du mois en cours

                annees = [];

            for(var i = actualYear; i <= actualYear + visibility; i++){ // on remplit le tableau annees permettant d'avoir une visibilite depuis l'annee en cours jusqu'a un nombre N d'annees (N etant definit dans visibility)
                annees.push(i);
            }

            var options = [];

            for(var i = 0; i <= visibility; i++){ // on remplit le tableau options en prenant soin de ne pas ajouter le trimestre en cours si on est dans le dernier mois du trimestre
                if(actualMonth === firstQuarter[2] && actualYear === annees[i]){
                    var obj2 = {year: annees[i], quarter: secondQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    options.push(obj2, obj3, obj4);
                } else if(actualMonth === secondQuarter[2] && actualYear === annees[i]){
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    options.push(obj1, obj3, obj4);
                } else if(actualMonth === thirdQuarter[2] && actualYear === annees[i]){
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj2 = {year: annees[i], quarter: secondQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    options.push(obj1, obj2, obj4);
                } else if(actualMonth === fourthQuarter[2] && actualYear === annees[i]){
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj2 = {year: annees[i], quarter: secondQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter};
                    options.push(obj1, obj2, obj3);
                } else {
                    var obj1 = {year: annees[i], quarter: firstQuarter},
                        obj2 = {year: annees[i], quarter: secondQuarter},
                        obj3 = {year: annees[i], quarter: thirdQuarter},
                        obj4 = {year: annees[i], quarter: fourthQuarter};
                    options.push(obj1, obj2, obj3, obj4);
                }
            }
            return options;
        };
        
        return optionsFactory;
    });

