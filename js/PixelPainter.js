$(document).ready(function(){
	function PixelPainter(width, height, size){
		this.width = width;
		this.height = height;
		this.size = size;


            this.renderCanvas = function (where){
			$(where).css({"display":"inline","float":"left"});
			for(var i = 0; i < height; i++){
				$(where).append("<tr id='canvas_row_"+i+"'>");
				$("#canvas_row_"+i).css("border","1px solid #E6E6E6");

				for(var j = 0; j < width; j++){
					$("#canvas_row_"+i).append("<td class='canvas_column_"+j+"'>");
					$(".canvas_column_"+j).css({"border":"1px solid #E6E6E6", "width":size, "height":size});

				}
			}
			var isMouseDown = false;


			$("#container").mousedown(function(){
				isMouseDown = true;
			})
			.mouseup(function(){
					isMouseDown = false;
				});

			$("#container tr td").mouseenter(function(){
				if(isMouseDown)
					$(this).css("background-color", currentColor);

				});


			
			$("#container tr td").click(function(){
				$(this).css("background-color", currentColor);

			});

		};


	}

	function ColorPicker(width, height, size){
		this.width = width;
		this.height = height;
		this.size = size;
		colors = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dodgerblue",
            "firebrick",
            "floralwhite",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "ghostwhite",
            "gold",
            "goldenrod",
            "gray",
            "green",
            "greenyellow",
            "honeydew",
            "hotpink",
            "indianred",
            "indigo",
            "ivory",
            "khaki",
            "lavender",
            "lavenderblush",
            "lawngreen",
            "lemonchiffon",
            "lightblue",
            "lightcoral",
            "lightcyan",
            "lightgoldenrodyellow",
            "lightgray",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightsteelblue",
            "lightyellow",
            "lime",
            "limegreen",
            "linen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mintcream",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "oldlace",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "seashell",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "snow",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "white",
            "whitesmoke",
            "yellow",
            "yellowgreen"
            ];
    this.currentColor = "";

        var colorCell = "<td class='toolbar_column_";
        var colorRow = "<tr id='toolbar_row_";

        this.renderColorPicker = function (where){
			$(where).css({"display":"inline","float":"left","margin-left":"20px"});
			for(var i = 0; i < height; i++){
				$(where).append(colorRow+i+"'>");
				$("#toolbar_row_"+i).css("border","1px solid black");

				for(var j = 0; j < width; j++){
					$("#toolbar_row_"+i).append(colorCell+j+"'>");
					$(".toolbar_column_"+j).css({"border":"1px solid black", "width":size, "height":size, "background-color":""});

				}
			}


			$("#toolbar").append("<button id='whiteAll'>Clear All</button>");
			$("#toolbar").append("<button id='colorAll'>Paint All</button>");
			$("#toolbar").append("<button id='eraseColor'>Erase</button>");
			// $("#toolbar").append("<br /><button id='borders'>Borders</button>");
			$("#toolbar").append("<p id='colorValue'></p>");

			
			var colorCounter = 0;
			for (var k = 0; k < 20; k++){
				for(var l = 0; l < 7; l++){
					$("#toolbar_row_"+k+" .toolbar_column_"+l).css("background-color", colors[colorCounter]);
					colorCounter++;
				}
			}

			$("#toolbar tr td").click(function(){
				currentColor = $(this).css("background-color");
				$("#colorValue").html("Color Value: " + currentColor);
				// alert(currentColor);
			});

			$("#whiteAll").click(function(){
				$("#container tr td").css({"background-color":"", "border":"1px solid #E6E6E6"});
				// alert(currentColor);
			});

			$("#colorAll").click(function(){
				// if ( $("#container tr td").css("background-color") == ""){
					$("#container tr td").css("background-color", currentColor);
				// }
				// alert(currentColor);
			});

			$("#eraseColor").click(function(){
				currentColor = "";
				$("#colorValue").html("Color Value: " + currentColor);
				// alert(currentColor);
			});

			$("#borders").click(function(){
				$("#container tr td").css("border","1px solid black").toggle();
			});


		

		};


	}

	$("#clear").css({"clear":"both"});
	var pixelPainter = new PixelPainter(50,50,10);
	var colorPicker = new ColorPicker(7,20,20);

	pixelPainter.renderCanvas("#container");
	colorPicker.renderColorPicker("#toolbar");
	


});