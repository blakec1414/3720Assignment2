
var xhr = new XMLHttpRequest();
//var url = "https://api.nasa.gov/planetary/apod?api_key=G1ToqzZncoUNO42lrAAV600DZyurcNWPk4piOI5J"
var url2 = " https://www.poemist.com/api/v1/randompoems"
var url = "https://binaryjazz.us/wp-json/genrenator/v1/genre/"

xhr.open("GET", url, true);

xhr.send(null);

xhr.onload = function(){

	if(xhr.status == 200){
		//document.write(xhr.responseText)

		var genreData = JSON.parse(xhr.responseText)

		//console.log(genreData)



		//var newHeader = $("<h2>")
		//newHeader.attr(genreData)
		//$("body").prepend(newHeader)

		$("body").prepend("<h2>" + genreData + "</h2>")


	}
}

xhr.open("GET", url2, true);

xhr.send(null);

xhr.onload = function(){

	if(xhr.status == 200){
		//document.write(xhr.responseText)

		var poemData = JSON.parse(xhr.responseText)

		//console.log(poemData[0].content)



		//var newHeader = $("<h2>")
		//newHeader.attr(genreData)
		//$("body").prepend(newHeader)

		$("body").prepend("<h3>" + poemData[0].content + "</h3>")


	}
}

