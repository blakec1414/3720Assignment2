
var xhr = new XMLHttpRequest();
//var url = "https://api.nasa.gov/planetary/apod?api_key=G1ToqzZncoUNO42lrAAV600DZyurcNWPk4piOI5J"


$("#randomize").on("click",function(){
clearAPI()
callAPI()

})

var url2 = "https://binaryjazz.us/wp-json/genrenator/v1/genre/"

xhr.open("GET", url2, true);

xhr.send(null);

xhr.onload = function(){

	if(xhr.status == 200){


		

		var genreData = JSON.parse(xhr.responseText)






		$("p").append("<h2>" + genreData + "</h2>")


	}
}

var xhr2 = new XMLHttpRequest();
var url = " https://www.poemist.com/api/v1/randompoems"

xhr2.open("GET", url, true);

xhr2.send(null);

xhr2.onload = function(){

	if(xhr2.status == 200){


		var poemData = JSON.parse(xhr2.responseText)

		console.log(poemData)




		$("p").append("<h3>" + poemData[0].title + "</h3>")
		$("p").append("<h3>" + poemData[0].poet.name + "</h3>")
		$("p").append("<h3>" + poemData[0].content + "</h3>")



	}
}

function callAPI() {

var url2 = "https://binaryjazz.us/wp-json/genrenator/v1/genre/"

xhr.open("GET", url2, true);

xhr.send(null);

xhr.onload = function(){

	if(xhr.status == 200){


		

		var genreData = JSON.parse(xhr.responseText)






		$("p").append("<h2>" + genreData + "</h2>")


	}
}

var xhr2 = new XMLHttpRequest();
var url = " https://www.poemist.com/api/v1/randompoems"

xhr2.open("GET", url, true);

xhr2.send(null);

xhr2.onload = function(){

	if(xhr2.status == 200){


		var poemData = JSON.parse(xhr2.responseText)

		console.log(poemData)




		$("p").append("<h3>" + poemData[0].title + "</h3>")
		$("p").append("<h3>" + poemData[0].poet.name + "</h3>")
		$("p").append("<h3>" + poemData[0].content + "</h3>")



	}
}


}

function clearAPI() {$("p").empty()}