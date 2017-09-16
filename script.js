// vanilla javascript, without the delay

// const abs = document.getElementsByTagName("DIV");

// const button = document.getElementById("button");

// function position() {
// 	for(var i=0; i<abs.length; i++){
// 		abs[i].classList.add("abso");
// 	}
// }

// button.addEventListener("click", position)

const abs = $("div");

const button = $("#button");

function position(){
	abs.each(function(i){
		var abso = $(this);
		setTimeout(function(){
			abso.addClass("abso");
			abso.css("left", "-=400px")
		}, i*300)
	})
}

button.click(position)