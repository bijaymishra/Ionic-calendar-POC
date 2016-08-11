angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})
.directive('scrollWatch', function($rootScope) {
  return function(scope, elem, attr) {
    var start = 0;
    var threshold = 150;
    
    elem.bind('scroll', function(e) {
      if(e.detail.scrollTop - start > threshold) {
        $rootScope.slideHeader = true;
      } else {
        $rootScope.slideHeader = false;
      }
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        $rootScope.slideHeader = false;
      }
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
      $rootScope.$apply();
    });
  };
})
.controller('CalendarDemoCtrl', function ($scope) {
        'use strict';

/*calendar Show hide cde */



        $scope.calendar = {};
        $scope.changeMode = function (mode) {
            $scope.calendar.mode = mode;
        };

        $scope.loadEvents = function () {
            $scope.calendar.eventSource = createRandomEvents();
        };

        $scope.onEventSelected = function (event) {
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        };

        $scope.onViewTitleChanged = function (title) {
            $scope.viewTitle = title;
        };

        $scope.today = function () {
            $scope.calendar.currentDate = new Date();
        };

        $scope.isToday = function () {
            var today = new Date(),
                currentCalendarDate = new Date($scope.calendar.currentDate);

            today.setHours(0, 0, 0, 0);
            currentCalendarDate.setHours(0, 0, 0, 0);
            return today.getTime() === currentCalendarDate.getTime();
        };

        $scope.onTimeSelected = function (selectedTime, events) {
            console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0));
        };

        function createRandomEvents() {
            var events = [{
	"title": "Event - 0",
	"startTime": "2016-06-24T09:30:00.000Z",
	"endTime": "2016-06-24T10:12:00.000Z",
	"allDay": false
}, {
	"title": "Event - 1",
	"startTime": "2016-08-12T01:41:00.000Z",
	"endTime": "2016-08-12T03:45:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 2",
	"startTime": "2016-09-03T00:00:00.000Z",
	"endTime": "2016-09-04T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 3",
	"startTime": "2016-08-12T00:00:00.000Z",
	"endTime": "2016-08-13T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 4",
	"startTime": "2016-08-31T00:00:00.000Z",
	"endTime": "2016-09-01T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 5",
	"startTime": "2016-06-12T00:00:00.000Z",
	"endTime": "2016-06-13T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 6",
	"startTime": "2016-07-22T16:11:00.000Z",
	"endTime": "2016-07-23T18:58:00.000Z",
	"allDay": false
}, {
	"title": "Event - 7",
	"startTime": "2016-06-12T01:07:00.000Z",
	"endTime": "2016-06-13T02:05:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 8",
	"startTime": "2016-07-15T00:00:00.000Z",
	"endTime": "2016-07-16T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 9",
	"startTime": "2016-09-03T13:07:00.000Z",
	"endTime": "2016-09-04T15:37:00.000Z",
	"allDay": false
}, {
	"title": "Event - 10",
	"startTime": "2016-07-06T07:45:00.000Z",
	"endTime": "2016-07-07T09:48:00.000Z",
	"allDay": false
}, {
	"title": "Event - 11",
	"startTime": "2016-08-11T08:50:00.000Z",
	"endTime": "2016-08-11T09:15:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 12",
	"startTime": "2016-08-30T00:00:00.000Z",
	"endTime": "2016-08-31T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 13",
	"startTime": "2016-08-12T00:00:00.000Z",
	"endTime": "2016-08-13T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 14",
	"startTime": "2016-08-05T21:57:00.000Z",
	"endTime": "2016-08-06T22:43:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 15",
	"startTime": "2016-09-02T00:00:00.000Z",
	"endTime": "2016-09-03T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 16",
	"startTime": "2016-09-06T09:59:00.000Z",
	"endTime": "2016-09-07T11:07:00.000Z",
	"allDay": false
}, {
	"title": "Event - 17",
	"startTime": "2016-08-21T23:25:00.000Z",
	"endTime": "2016-08-22T00:14:00.000Z",
	"allDay": false
}, {
	"title": "Event - 18",
	"startTime": "2016-06-20T20:27:00.000Z",
	"endTime": "2016-06-20T20:48:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 19",
	"startTime": "2016-08-07T00:00:00.000Z",
	"endTime": "2016-08-08T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 20",
	"startTime": "2016-08-13T01:23:00.000Z",
	"endTime": "2016-08-13T02:17:00.000Z",
	"allDay": false
}, {
	"title": "Event - 21",
	"startTime": "2016-07-16T16:42:00.000Z",
	"endTime": "2016-07-16T18:30:00.000Z",
	"allDay": false
}, {
	"title": "All Day kuch bhi",
	"startTime": "2016-07-27T00:00:00.000Z",
	"endTime": "2016-07-28T00:00:00.000Z",
	"allDay": false
}, 
{
	"title": "All Day kuch bhi",
	"startTime": "2016-07-27T00:00:00.000Z",
	"endTime": "2016-07-28T00:00:00.000Z",
	"allDay": false
},
{
	"title": "All Day kuch bhi",
	"startTime": "2016-07-27T00:00:00.000Z",
	"endTime": "2016-07-28T00:00:00.000Z",
	"allDay": false
},
{
	"title": "All Day kuch bhi",
	"startTime": "2016-07-27T00:00:00.000Z",
	"endTime": "2016-07-28T00:00:00.000Z",
	"allDay": false
},
{
	"title": "All Day kuch bhi",
	"startTime": "2016-07-27T00:00:00.000Z",
	"endTime": "2016-07-28T00:00:00.000Z",
	"allDay": false
},
{
	"title": "Event - 23",
	"startTime": "2016-06-14T04:55:00.000Z",
	"endTime": "2016-06-14T06:53:00.000Z",
	"allDay": false
}, {
	"title": "Event - 24",
	"startTime": "2016-08-15T04:39:00.000Z",
	"endTime": "2016-08-16T07:31:00.000Z",
	"allDay": false
}, {
	"title": "Event - 25",
	"startTime": "2016-08-10T10:05:00.000Z",
	"endTime": "2016-08-11T12:45:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 26",
	"startTime": "2016-09-02T00:00:00.000Z",
	"endTime": "2016-09-03T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 27",
	"startTime": "2016-08-13T00:00:00.000Z",
	"endTime": "2016-08-14T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 28",
	"startTime": "2016-06-15T13:43:00.000Z",
	"endTime": "2016-06-16T15:20:00.000Z",
	"allDay": false
}, {
	"title": "Event - 29",
	"startTime": "2016-09-06T10:46:00.000Z",
	"endTime": "2016-09-07T11:51:00.000Z",
	"allDay": false
}, {
	"title": "Event - 30",
	"startTime": "2016-09-03T09:31:00.000Z",
	"endTime": "2016-09-03T12:10:00.000Z",
	"allDay": false
}, {
	"title": "Event - 31",
	"startTime": "2016-07-26T13:54:00.000Z",
	"endTime": "2016-07-26T15:19:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 32",
	"startTime": "2016-07-18T00:00:00.000Z",
	"endTime": "2016-07-19T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 33",
	"startTime": "2016-07-30T00:00:00.000Z",
	"endTime": "2016-07-31T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 34",
	"startTime": "2016-08-24T00:00:00.000Z",
	"endTime": "2016-08-25T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 35",
	"startTime": "2016-08-21T00:00:00.000Z",
	"endTime": "2016-08-22T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 36",
	"startTime": "2016-07-23T00:00:00.000Z",
	"endTime": "2016-07-24T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 37",
	"startTime": "2016-09-08T14:41:00.000Z",
	"endTime": "2016-09-09T15:40:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 38",
	"startTime": "2016-08-01T00:00:00.000Z",
	"endTime": "2016-08-02T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 39",
	"startTime": "2016-09-03T01:04:00.000Z",
	"endTime": "2016-09-04T01:50:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 40",
	"startTime": "2016-07-13T00:00:00.000Z",
	"endTime": "2016-07-14T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 41",
	"startTime": "2016-07-15T12:45:00.000Z",
	"endTime": "2016-07-16T12:47:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 42",
	"startTime": "2016-06-18T00:00:00.000Z",
	"endTime": "2016-06-19T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 43",
	"startTime": "2016-09-03T00:00:00.000Z",
	"endTime": "2016-09-04T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 44",
	"startTime": "2016-08-28T13:22:00.000Z",
	"endTime": "2016-08-29T15:18:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 45",
	"startTime": "2016-06-28T00:00:00.000Z",
	"endTime": "2016-06-29T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 46",
	"startTime": "2016-06-12T00:00:00.000Z",
	"endTime": "2016-06-13T00:00:00.000Z",
	"allDay": true
}, {
	"title": "All Day - 47",
	"startTime": "2016-07-10T00:00:00.000Z",
	"endTime": "2016-07-11T00:00:00.000Z",
	"allDay": true
}, {
	"title": "Event - 48",
	"startTime": "2016-06-20T11:31:00.000Z",
	"endTime": "2016-06-21T12:34:00.000Z",
	"allDay": false
}, {
	"title": "All Day - 49",
	"startTime": "2016-08-29T00:00:00.000Z",
	"endTime": "2016-08-30T00:00:00.000Z",
	"allDay": true
}];
            
            console.log(JSON.stringify(events));
            return events;
        }
    });