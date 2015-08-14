app
    .factory("dateFactory", function(){
        var dateFactory = {};

        dateFactory.format = function(){ // permet de formater la date actuelle sous la forme d/M/y
            objDate = new Date();
            return objDate.getDate() + "/" + (objDate.getMonth()+1) + "/" + objDate.getFullYear();
        };
        
        return dateFactory;
    });

