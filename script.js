$("document").ready(function(){
	$(".box4-simple-button").click(function(){
		let x = this.id;
		if (x =="box4-simple-button1") {
			document.getElementById("box4-more1").style.display = "block";	
			document.getElementById("box4-more2").style.display = "none";	
			document.getElementById("box4-more3").style.display = "none";
			document.getElementById("box4-simple-content1").style.display = "block";
			document.getElementById("box4-simple-content2").style.display = "none";	
			document.getElementById("box4-simple-content3").style.display = "none";	
		}
		else if (x == "box4-simple-button2") {
			document.getElementById("box4-more1").style.display = "none";	
			document.getElementById("box4-more2").style.display = "block";	
			document.getElementById("box4-more3").style.display = "none";
			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "block";
			document.getElementById("box4-simple-content3").style.display = "none";							
		}
		else if (x == "box4-simple-button3") {
			document.getElementById("box4-more1").style.display = "none";	
			document.getElementById("box4-more2").style.display = "none";	
			document.getElementById("box4-more3").style.display = "block";
			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "block";

		}
	})
})