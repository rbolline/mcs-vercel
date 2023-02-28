import React from "react";
import SlideshowSwap from "./SlideshowSwap";

function HerosectionNew(props) {

	// let unlabeledImagesEx = [
	// 	"https://upload.wikimedia.org/wikipedia/commons/b/bd/Color_icon_blue.svg",
	// 	"https://upload.wikimedia.org/wikipedia/commons/8/8a/White_blue_triangle.svg",
	// 	"https://www.iconsdb.com/icons/preview/blue/circle-xxl.png"
	// ];
	// let labeledImagesEx = [
	// 	"https://upload.wikimedia.org/wikipedia/commons/2/27/Red_square.svg",
	// 	"",
	// 	"https://upload.wikimedia.org/wikipedia/commons/0/05/Red_circle.svg"
	// ];

	return (
		<div>
			<SlideshowSwap 
				unlabeledImages={props.unlabeledImages} 
				labeledImages={props.labeledImages} 
			/>
		</div>
	);
}

export default HerosectionNew;