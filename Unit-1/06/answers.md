#Answers

##What is $scope?
Controllers/Constructor functions set the model property and functions, and can only be done with $scope. This makes it so that only data that is defined in the scope object is accessible on the html. 

##What are Angular modules? What's the syntax for defining a module?
Modules are almost a container for the different parts of the app (ie. controllers, services, filters, directives.) var myModule = angular.module('myModule', []);

##Why do we pass in $scope as an argument to controller functions?
It's cleaner, and the function expects those parameters. Easier for unit-testing also.

##In Express, what are Angular controllers most analogous to?
