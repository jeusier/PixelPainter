# Pixel Painter

## Design Notes

### What classes are needed?

- PixelPainter class
	--pixelGrid: stores an array of each pixel
	++buildGrid(): builds table based on the properties of the pixels
	++buildColorPicker: builds table based on properties of the color buttons
	++render(): displays the PixelPainter, ColorPicker, and Buttons in HTML
	++constructor(width, height, size): 

- Pixel class
	--pixelSize:  stores the size of a pixel (table cell)
	--currentColor: stores the current background-color of the pixel
	++changeColor(): changes the background-color stored in currentColor
	++clearColor(): removes the background-color stored in currentColor

- ColorPicker class
	--colorGrid: stores an array of each color cell
	--clearButton: stores the clear button
	--resetButton: stores the reset button

- Button class
	--buttonWidth: stores the width of the button
	--buttonHeight: stores the height of the button
	++buttonClick(): runs onclick function

- ColorButton < Button:
	++chooseColor(): when color is clicked, store the color into currentColor

- EraseButton < Button:
	++eraseColor(): when erase button is clicked, remove the color in currentColor

- ResetButton < Button:
	++resetColor(): when reset button is clicked, remove all background-color css for all pixels