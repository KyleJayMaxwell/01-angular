#Answers

##What does ng-model do?
ng-model binds an input, select, or textarea to a property inside the scope using NgModelcontrol.

##What is "dirty checking"?
Dirty checking is checking if that value is "dirty", meaning if it thinks the value could change. Basically Angular is running an event loop to see if it's always consistent with each other. Better ways to be done, but it works in every browser and is predictable.

##Find a way to set the initial value of "name" as "BoJack" (without writing a controller).

##What are those {{ }} expressions? Are they Handlebars?
They are placeholders for values. That angular is looking for. 

##Explain what two-way data binding is.
In it's simpilist form, it just means that when either one of the two things of the two way data binding changes the other does. So if textbox 1 is equal to two so will textbox 2, but if someone changes the value of textbox 2 to four, textbox 1 will change to four also. Just both change eachother. 

##BONUS: Research the $digest loop
Digest loop is what we are calling "dirty checking", because the digest loop is the one actaully going through the value checking to see if it's dirty(changed), if it is it'll change the value till it's caught up(not dirty), and then repaint the DOM. This is all a very quick process.  