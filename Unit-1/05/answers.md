#answers.md

##What is the purpose of ng-init?
Ng-init allows use to evaluate an expression in the current scope, basically a way to set a default value. 

##Why use ng-src and ng-href?
If we used regular src, and href tags and filled them in with angular expressions, they might not work and create a 404 because angular takes a bit of time to load. NG-src, and Ng-href wait till angular loads before filling in the value.

##What are directives?
Angular's way of extending html with directives. Angular's certain ways of adding behavior to the DOM.

##Does ng-class require an object to be passed in?
Yes it does, and in order for the class to work, the object or value of the object has to be true. 

##What order does an ng-repeat display items in?
In ascending order of the array. 

##How does ng-repeat handle duplicate data?
It breaks, because the angular checks the value of said item and if it matches it wont append it. To get around it use track by $index.