#answers.md

##What are Angular expressions? How do they compare to tags from templating engines you've used before?
Are things that are usually placed in bindings, that refer to something else in the app. Swig was the exact same thing, just with more logic.

##What happens when you write invalid code in an expression? What type of error do you get?
It breaks everything, just from one bad piece of code and it is "Syntax Error: Token 'thingThatWentWrong' is an unexpected token at column 9 of the expression [plural3 thingThatWentWrong | uppercase] starting at [thingThatWentWrong | uppercase]"

##What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
Angular filters format the data, and can be used inside an expression. lowercase, number, currency, and date.

##What's the syntax for filters?
inside express {{ expression | filter }}

##Can you use more than one filter?
Yes you can by doing this {{ expression | filter1 | filter2 }}

##We'll soon see how to create custom filters. What is a use case for a custom filter?
Doing multiple things on one expression, or the pre defined things don't cover what we need.