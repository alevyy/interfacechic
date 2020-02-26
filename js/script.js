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
var continueee=1;
function myFunction() {
    var node = document.createElement("div");
    var sub = document.getElementById("Subject").value;
    var leng = document.getElementById("Length").value;
    var textnode = document.createTextNode(sub);
    node.appendChild(textnode);
    nb+=1;
    node.id= nb;
    
    node.style.height = (6*leng)+'px';
    
    
    document.getElementById("tableau").appendChild(node);
  }
var nb_supp=1000;
length_supp=0;
var reset=0;
var newd = 1;
function progress() {
    var prg = document.getElementById('progress');
    var percent = document.getElementById('percentCount');
    var progress=0;
    
    var id = setInterval(frame,1000);
    var nodet = document.getElementById(currentid);
        nodet.style.background = "green";

        var nodec = document.getElementById(currentid);
        var stri= nodec.style.height;
        var heightime = document.getElementById('progress-bar');
        var vali = Number(stri.split("px",1));
        sizebar =4*vali;
        heightime.style.height = (4*vali)+'px';
   
        
    function frame(){
        if(reset){
            reset=0;
            progress=0;
        }
        var i;
        var somme =0;
        var node = document.getElementById(currentid);
        if(currentid<nb){
            somme=0;
            for(i=1;i<(currentid+1);i++){
                var act = document.getElementById(i);
                var str = act.style.height;
                var val = Number(str.split("px",1));
                somme += val;
            }
        }

        if(progress >= sizebar) {
            if(currentid!=nb){
            node.style.background="red";
                var str = node.style.height;
                var val = Number(str.split("px",1));
                node.style.height = (val+6)+'px';
                var der = document.getElementById(nb);
                var str = der.style.height;
                var valu = Number(str.split("px",1));
                var heightime = document.getElementById('progress-bar');
                sizebar += 24;
                heightime.style.height = sizebar+'px';
                if (newd){
                    newd=0;
                    length_supp=0;
                    var nodesup = document.createElement("div");
                    var sub = der.innerHTML;
                    var textnode = document.createTextNode(sub);
                    nodesup.id= nb_supp;
                    nodesup.style.height = 6+'px';
                    var btn = document.createElement("BUTTON");
                    btn.innerHTML = "DELETE";
                    var i = nb_supp;
                    btn.onclick= function() {clearBox(i)};
                    document.body.appendChild(btn);
                    nodesup.appendChild(textnode);
                    document.getElementById("trop").insertBefore(nodesup,document.getElementById("trop").childNodes[0]);
                    document.getElementById(nb_supp).appendChild(btn);
                }
                if(valu>7){
                    der.style.height= (valu-6)+'px';
                    length_supp+=6;
                    var suppdiv = document.getElementById(nb_supp);
                    suppdiv.style.height=length_supp+'px';

                }
                else{
                    length_supp+=6;
                    var suppdiv = document.getElementById(nb_supp);
                    suppdiv.style.height=length_supp+'px';
                    der.style.display= "none";
                    nb-=1;
                    newd=1;
                    nb_supp+=1;
                }
            }
            else{
                clearInterval(id);
                var node = document.getElementById(currentid);
                node.style.background="blue";
                alert("You finished your meeting");
            }
        } else {
            if(continueee){
                progress+=0.4;
            }
            prg.style.height = progress + 'px';
        }
    }
}
function Arrete() {
    continueee=0;
}
function Continue() {
    continueee=1;
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
    
    var node = document.getElementById(currentid);
    node.style.background="blue";
    currentid+=1;
    reset=1;
    var nodec = document.getElementById(currentid);
    var heightime = document.getElementById('progress-bar');
    var stri= nodec.style.height;
    var vali = Number(stri.split("px",1));
    
    sizebar = 4*vali;
    heightime.style.height = (4*vali)+'px';
    nodec.style.background="green";
}

function clearBox(elementID)
{
    document.getElementById(elementID).style.display = "none";
    
}