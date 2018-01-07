//vanilla javascript
//have to use "let" instead of "var" in the for loop because after 300ms, will have gone through entire loop already and var value keeps getting updated


// const abs = document.getElementsByTagName("DIV");

// const button = document.getElementById("button");

// function position() {
// 	for(let i=0; i<abs.length; i++){
// 		setTimeout(function(){abs[i].classList.add("abso")}, i*300);
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
			abso.css("left", "-=600px")
		}, i*300)
	})
}

button.click(position)