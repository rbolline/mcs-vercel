import React from "react";
import Slideshow from "../components/Slideshow";
import SlideshowSwap from "../components/SlideshowSwap";

function HerosectionNew({unlabeledImages, labeledImages}) {
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
			unlabeledImages={unlabeledImages} 
			labeledImages={labeledImages} 
			/>
		</div>
	);
}

export default HerosectionNew;