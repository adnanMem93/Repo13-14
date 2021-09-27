var parents = document.querySelectorAll('.parent');

var black = document.getElementsByName('black');

parents.forEach(function(parent){

parent.addEventListener('click', function(e){
  
 console.log(e)
})


})
