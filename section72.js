//Create a function that reverses a string:
//' Hi my name is Andrei' should be:
//'ierdnA si eman ym iH'

function reverse(str){

  const backwards=[]
  for(let i=str.length;i >=0; i--) {
    backwards.push(str[i]);
  }
  return backwards;
}

reverse('Hi my name is Andrei');
