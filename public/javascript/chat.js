var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce){
    $scope.messages = [
    {
      sender:"BOT",
      text:"Hey how can I help you?",
      time:"19:19"
    },
    {
      sender: "USER",
      text:"Who are you?",
      time:"19:19"
    },
    {
      sender: "BOT",
      text: "Moi is Bot the Bot",
      time: "19:20"
    }];

    $scope.sendMessage = function() {
    exampleSocket.send($scope.userMessage);
    $scope.userMessage = "";
    };
    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           jsonData.time = new Date().toLocateTimeString;
           console.log(jsonData);
       };

 $scope.trust= $sce.trustAsHtml;
});
