var app = angular.module("test-roskvartal", []);

app.controller('ProductsController', ['$scope', function($scope) {
  $scope.products = [
    {
      name : 'ГИС ЖКХ',
      desc : 'Возьмём все заботы управляющей компании и расчётного центра связанные с ГИС ЖКХ, на себя'
    },
    {
      name : 'ГИС ЖКХ',
      desc : 'Возьмём все заботы управляющей компании и расчётного центра связанные с ГИС ЖКХ, на себя'
    },
    {
      name : 'ГИС ЖКХ',
      desc : 'Возьмём все заботы управляющей компании и расчётного центра связанные с ГИС ЖКХ, на себя'
    },
    {
      name : 'ГИС ЖКХ',
      desc : 'Возьмём все заботы управляющей компании и расчётного центра связанные с ГИС ЖКХ, на себя'
    }
  ]
}]);

app.directive('scroll', function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind('scroll', function() {
      if (this.pageYOffset >= 40) {
        scope.navbarColorToggle = true;
      }
      else {
        scope.navbarColorToggle = false;
      }
      scope.$apply();
    })
  }
});

app.controller('quizController', ['$scope', '$http', function($scope, $http) {
  $scope.title = 'Бухгалтеру: ведение учета, первичка, проводки';
  $scope.questions = [
    {
      pics : false,
      question : 'Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела. Бухучет должен делать то же самое! Только внутри организма предприятия. На предприятие могут свалиться разные раздражители. Но только некоторые из них задевают нервы бухгалтерского учета и заставляют его фиксировать, группировать и передавать дальше информацию.',
      options : ['Да, конечно', 'Нет, разумеется', 'Вы о чём?'],
      hint : 'п. 5. Периодичность оказания услуг и выполнения работ, предусмотренных перечнем услуг и работ, определяется с учетом требований, установленных законодательством Российской Федерации. По решению собственников помещений в многоквартирном доме может устанавливаться более частая периодичность оказания услуг и выполнения работ, чем это предусмотрено законодательством Российской Федерации.',
      cost : 100
    },
    {
      pics : false,
      question : '',
      options : ['Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела.', 'Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела.', 'Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела.'],
      hint : 'Hint 2',
      cost : 50
    },
    {
      pics : true,
      question : 'Бухгалтерию можно сравнить с нервной системой человека. Она фиксирует все, что происходит внутри его организма. Затем, собрав информацию, она принимает решения и управляет каждым движением тела. Бухучет должен делать то же самое! Только внутри организма предприятия. На предприятие могут свалиться разные раздражители. Но только некоторые из них задевают нервы бухгалтерского учета и заставляют его фиксировать, группировать и передавать дальше информацию.',
      options : [1, 2, 3, 4],
      hint : 'Hint 3',
      cost : 200
    }
  ];
  var check = [];
  $scope.answers = [];
  $scope.active = 0;
  $scope.getQuestion = function (id) {
    $scope.hintClose();
    if ($scope.questions[id]) {
      $scope.question = {};
      $scope.question.pics = $scope.questions[id].pics,
      $scope.question.question = $scope.questions[id].question,
      $scope.question.options = $scope.questions[id].options,
      $scope.question.hint = $scope.questions[id].hint,
      $scope.question.cost = $scope.questions[id].cost
      $scope.active = id;
      if ($scope.answers[id]) {
        $('#my_radio_button_' + $scope.answers[id].answer).prop('checked', true);
        $('.badge-answer').removeClass('correct incorrect');
        $('#option_' + $scope.answers[id].answer).addClass((check[id].correct) ? 'correct' : 'incorrect');
        if (check[id].correct && $scope.isFinished) {
          $scope.correct = 'Это правильный ответ';
        }
        else {
          $scope.correct = 'Неправильный ответ';
        }
      }
    }
  }
  $scope.getNext = function () {
    var ans = parseInt($('input[name=answer]:checked').val());
    if (!isNaN(ans)) {
      $scope.answers[$scope.active] = {
        number : $scope.active,
        answer : ans
      };
      console.log($scope.answers);
      $scope.active++;
      if ($scope.active < $scope.questions.length) {
        $scope.getQuestion($scope.active);
        $("input:radio[name='answer']").each(function(i) {
          this.checked = false;
        });
      }
      else {
        $scope.active--;
        $scope.isFinished = true;
        for (var i = 0; i < $scope.answers.length; i++) {
          if (!$scope.answers[i]) {
            $scope.isFinished = false;
          }
        }
        if (!$scope.isFinished) {
          alert('Вы ответили не на все вопросы');
        }
        else {
          var postData = JSON.stringify($scope.answers);
          $http.post('/testCheck', postData)
          .success(function(data, status, headers, config) {
            check = data;
            $scope.isSuccessful = true;
            for (var i = 0; i < data.length; i++) {
              if (!data[i].correct) {
                $scope.isSuccessful = false;
              }
              $('#question_' + i).addClass((data[i].correct) ? 'istrue' : 'isfalse');
            }
            $scope.getQuestion($scope.questions.length - 1);
          }).
          error(function(data, status, headers, config) {
            alert('Ошибка при коммуникации с сервером.');
          });
        }
      }
    }
    else {
      alert('Вы не выбрали вариант ответа.');
    }
  }
  $scope.hintShow = function () {
    $scope.hintShown = true;
  }
  $scope.hintClose = function () {
    $scope.hintShown = false;
  }
  $scope.quizRestart = function () {
    $scope.isFinished = false;
    $scope.answers = [];
    check = [];
    $('.questions-block li').removeClass('istrue isfalse');
    $scope.getQuestion(0);
  }
  $scope.getQuestion($scope.active);
}]);
