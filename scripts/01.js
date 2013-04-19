
//llamado cuando carga el doco!
$(document).ready(function() {


//empezo
	console.log("doco ready");

	//define Vars
	var textField1  = $("#textBox1");
	var textField2 = $("#textBox2");
	var labelText1 = $("#myTitleText");

	//define funcs
	//a function no args!!!
	$.clearFields = function() { 
	 	textField1.val("");
	 	textField2.val("");	 
	 	labelText1.text("calcu standBy");
 	}


 	//funcion con params
 	$.addFunction = function(num1, num2) {

 		console.log("copio master,, num1:"+num1+" tu num2: "+num2);

 		var suma = parseInt(textField1.val())+parseInt(textField2.val());

 

 		labelText1.text("suma: "+suma);

 	}

 	//clean vars
	$.clearFields();


	//click btn1
	$("#myBtn").click(function(){
	//console.log("butox" + textField1.val());
	$.addFunction(textField1.val(),textField2.val());
	//labelText1.text("copio: "+textField1.val());
	});

	//click para btn2
	$("#resetBtn").click(function(){
	$.clearFields();
	//alert("empieza de nuevo master"); //una alert view!


	});


});