$(document).ready(function(){
	function PixelPainter(width, height, size){
		this.width = width;
		this.height = height;
		this.size = size;

		this.render = function(where, type){
			$(where).append("<table>");
			for(var i = 0; i < height; i++){
				$(where).append("<tr id='"+type+"_row"+i+"'>");
				$("#"+type+"_row"+i).css("border","1px solid black");

				for(var j = 0; j < width; j++){
					$("#"+type+"_row"+i).append("<td class='column_"+j+"'>");
					$(".column_"+j).css({"border":"1px solid black", "width":size, "height":size});

				}
			}
			$(where).append("</table>");
			
		};
	}

	var pixelPainter = new PixelPainter(25,25,25);
	$("#container").html(pixelPainter.render("#container","canvas"));

});