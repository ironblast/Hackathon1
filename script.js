// var progressBar = document.getElementById('p');
// var newValue=0;
 
// function updateProgress(newValue) {
//     progressBar.value = newValue;
// }


// function changeColor(newColor) {
//     var elem = document.getElementById('para');
//     elem.style.color = newColor;
//   }



  function modif(val) {
    var ava = document.getElementById("avancement1");
    if((ava.value+val)<=ava.max && (ava.value+val)>=0) {
       ava.value += val;
    }
    console.log(ava.value)
    // avancement();
  }

  function modification(val) {
    var ava = document.getElementById("avancement2");
    if((ava.value+val)<=ava.max && (ava.value+val)>=0) {
       ava.value += val;
    }
    console.log(ava.value)
    // avancement();
  }