/**
 * Created by sanjeev on 24/03/2014.
 */

function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
}



/*
function call(){
    var q=parseInt(document.getElementById("txt1").value);
    var w=parseInt(document.getElementById("txt2").value);
    var result=q+w;
    if(isNaN(q)||isNaN(w)){
        alert("please enter a number");
    }
    else
    {
        var result=q+w;
        alert("The sum is " +result);
    }
}




function sum()
{
    var fn, ln, result;
    fn = parseInt(document.getElementById("n1").value, 10);
    ln = parseInt(document.getElementById("n2").value, 10);
    result =  (fn+ln);
    document.getElementById("demo2").innerHTML = result;
}


function addFields(){
    // Number of inputs to create
    var number = document.getElementById("member").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode("Member " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        container.appendChild(input);
        // Append a line break
        container.appendChild(document.createElement("br"));
    }
}
 */