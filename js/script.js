function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal - 1;
	}

	document.getElementById("countDownButton").innerHTML = newVal;
}
var nb = 0;
var sizebar = 0;
var currentid = 1;
function myFunction() {
    var node = document.createElement("div");
    var sub = document.getElementById("Subject").value;
    var leng = document.getElementById("Length").value;
    var heightime = document.getElementById('progress-bar');
    var textnode = document.createTextNode(sub);
    node.appendChild(textnode);
    nb+=1;
    node.id= nb;
    sizebar += (60*leng);
    node.style.height = (60*leng)+'px';
    
    heightime.style.height = sizebar +'px' ;
    document.getElementById("tableau").appendChild(node);
  }
function progress() {
    var prg = document.getElementById('progress');
    
    var percent = document.getElementById('percentCount');
    
    var progress = 0;
    var id = setInterval(frame,1000);
   
        
    function frame(){
        var i;
        var somme =0;
        var node = document.getElementById(currentid);
        node.style.background = "red";
        if(currentid<nb){
            somme=0;
            for(i=1;i<(currentid+1);i++){
                var act = document.getElementById(i);
                var str = act.style.height;
                var val = Number(str.split("px",1));
                somme += val;
            }
            if(progress>(somme+30)){
                node.style.background="green";
                var str = node.style.height;
                var val = Number(str.split("px",1));
                node.style.height = (val+60)+'px';
                var der = document.getElementById(nb);
                var str = der.style.height;
                var valu = Number(str.split("px",1));
                if(valu>70){
                    der.style.height= (valu-60)+'px';
                }
                else{
                    der.style.display= "none";
                    nb-=1;
                }

            }
        }

        if(progress == sizebar) {
            clearInterval(id);
        } else {
            progress+=10;
            prg.style.height = progress + 'px';
        }
    }
}
function start() {
      // Set the date we're counting down to
      var minutes = document.getElementById('minutes').innerHTML;
  var countDownDate = new Date().getTime()+(minutes*1000*60);

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}
function change(){
    currentid+=1;
}