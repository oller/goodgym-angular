"use strict";angular.module("angularGoodgymApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/view",{templateUrl:"views/view.html",controller:"ViewCtrl"}).when("/manage",{templateUrl:"views/manage.html",controller:"ManageCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).when("/team",{templateUrl:"views/team.html",controller:"TeamCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularGoodgymApp").controller("MainCtrl",["$scope",function(a){a.text={strapline:"Do Good, Get Fit"}}]),angular.module("angularGoodgymApp").controller("NavCtrl",["$scope",function(a){a.nav=[{title:"Home",slug:""},{title:"View Runs",slug:"view"},{title:"Manage Runs",slug:"manage"},{title:"View Team",slug:"team"},{title:"My Account",slug:"account"}]}]),angular.module("angularGoodgymApp").directive("responsive",function(){return{restrict:"A",link:function(){var a=document.getElementById("menu"),b=document.getElementById("menuLink"),c=document.getElementById("layout"),d=function(a,b){for(var c=a.className.split(/\s+/),d=c.length,e=0;d>e;e++)if(c[e]===b){c.splice(e,1);break}d===c.length&&c.push(b),a.className=c.join(" ")};b.onclick=function(e){e.preventDefault();var f="active";d(c,f),d(a,f),d(b,f)}}}}),angular.module("angularGoodgymApp").directive("activeLink",["$location",function(a){return{restrict:"A",link:function(b,c,d){var e=d.activeLink,f=d.href;f=f.substring(1),b.location=a,b.$watch("location.path()",function(a){f===a?c.addClass(e):c.removeClass(e)})}}}]),angular.module("angularGoodgymApp").controller("ViewCtrl",["$scope",function(a){a.title="My Runs"}]),angular.module("angularGoodgymApp").controller("ManageCtrl",["$scope",function(a){a.title="Manage My Runs"}]),angular.module("angularGoodgymApp").controller("AccountCtrl",["$scope",function(a){a.title="My Account"}]),angular.module("angularGoodgymApp").controller("TeamCtrl",["$scope",function(a){a.title="My Team"}]);