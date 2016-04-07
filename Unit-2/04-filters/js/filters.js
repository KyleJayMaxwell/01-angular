//convert snake_case to kebab-case
app.filter('kebab', function () {
  return function(input){
    return input.split('_').join('-');
  }
});


//Returns an acronym
app.filter('acronym', function() {
  return function(input){
    return input.split(' ').map(function(input){
      return input[0];
    }).join('');
  }
});


//Alternates capitialization of string
app.filter('aLtCaPs', function() {
  return function(input){
    var end = [];
    var split = input.split('');
      for(i=0;i<split.length;i++){
        if(i % 2){
          var low = split[i].toUpperCase();
          end.push(low);
        } else {
          var up = split[i].toLowerCase();
          end.push(up)
        }
      };
    var fin = end.join('');
    return fin;
  }
});


//Use with ng-repeat and filter the collection
app.filter('startsWithA', function () {
  return function(input) {
    console.log(input);
    var fin = [];
    for(i=0;i<input.length;i++){
      var name = input[i]['name'];
      if(name.charAt(0) === 'A' || name.charAt(0) === 'a' ){
        console.log(name);
        fin.push(input[i]);
      }
    }
    return fin;
  }
});

//Use with ng-repeat and an input to search a collection for string match
app.filter('strMatch', function () {
  return function (input, search) {
    console.log(input);
    var name = input[1]['name'];
    console.log(name);
    // if(name.charAt(0) === search){
    //   console.log(name);
    //   fin.push(input[i]);
    // }
    // return input
  }
});

//Come up with on your own
app.filter('?????', function() {
  //Do Cool Things...
});
