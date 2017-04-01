app.controller('TestController', ['$scope', function($scope) {
  $scope.title = 'Бухгалтеру: ведение учета, первичка, проводки';
  $scope.points = 0;
  $scope.questions = {
    '1' : {
      text: 'Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела. Бухучет должен делать то же самое! Только внутри организма предприятия. На предприятие могут свалиться разные раздражители. Но только некоторые из них задевают нервы бухгалтерского учета и заставляют его фиксировать, группировать и передавать дальше информацию.',
      choices : [
        'Да, конечно',
        'Нет, разумеется',
        'Вы о чём?'
      ]
    },
    '2' : {
      text: 'Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела. Бухучет должен делать то же самое! Только внутри организма предприятия. На предприятие могут свалиться разные раздражители. Но только некоторые из них задевают нервы бухгалтерского учета и заставляют его фиксировать, группировать и передавать дальше информацию.',
      choices : [
        '1', '2', '3'
      ]
    },
    '3' : {
      text : '',
      choices : ['1', '2', '3']
    },
    '4' : {
      text : '',
      choices : [1, 2, 3]
    },
    '5' : {
      text : '',
      choices : [1, 2]
    },
    '6' : {
      text : '',
      choices : [1]
    },
    '7' : {
      text: '',
      choices : [1]
    },
    '8' : {
      text : '',
      choices : [1]
    },
    '9' : {
      text : '',
      choices : [1]
    },
    '10' : {
      text : '',
      choices : [1]
    }
  }
}]);
