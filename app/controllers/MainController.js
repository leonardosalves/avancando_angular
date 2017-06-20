module.exports = function($scope,$http,$filter,clientAPIService,clientTestService,configValue,bonusGenerator) {
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.clients = [];
    $scope.msg = "";

    

    $scope.bonus = "Cod.Bonus: " + bonusGenerator.generator();

    //$scope.day = new Date();
    //$scope.totalMoeda = 27.35;

    var listClients = function(){
        clientAPIService.getClients().then(function(data,status){
            //console.log(data);
            //console.log(status);
            $scope.clients = data;
        });
    };
    var addClients = function(client){
        clientTestService.saveClients(client).then(function(data,status){
            //console.log(data);
            //console.log(status);
            listClients();
        });
    };
    var destroyClients = function(client){
        client.delete = true;
        clientAPIService.saveClients(client).then(function(data,status){
            //console.log(data);
            //console.log(status);
        });
    };

    listClients();

    $scope.add = function(client){
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.msg = "Successfully added record!";

    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
        $scope.msg = "";
    };
    $scope.save = function() {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.msg = "Successfully edited record!";

    };
    $scope.destroy = function(client) {
        $scope.clients['data'].splice($scope.clients['data'].indexOf(client),1);
        destroyClients(client);
        $scope.msg = "Successfully deleted record!";

    };
    $scope.orderBy = function(col){
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};