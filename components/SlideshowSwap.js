import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class SlideshowSwap extends React.Component {

    constructor(props) {
        super(props)
        this.unlabeledImages = props.unlabeledImages;
        this.labeledImages = props.labeledImages;
        this.zoomInProperties = {
            // indicators: true,
            scale: 1,
            //duration: 5000,
            transitionDuration: 2000000000,
            infinite: false,
            prevArrow: null,
            nextArrow: null,
            // prevArrow: (
            //     <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
            //         <svg
            //             xmlns="http://www.w3.org/2000/svg"
            //             viewBox="0 0 512 512"
            //             // fill="#2e2e2e"
            //             fill = "ffffff"
            //         >
            //             <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            //         </svg>
            //     </div>
            // ),
            // nextArrow: (
            //     <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
            //         <svg
            //             xmlns="http://www.w3.org/2000/svg"
            //             viewBox="0 0 512 512"
            //             // fill="#2e2e2e"
            //             fill = "ffffff"
            //         >
            //             <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            //         </svg>
            //     </div>
            // ),
        };
      };
	
    state = {
        open: true
    };
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    };

    getImageArray = () => (this.state.open ? this.unlabeledImages : this.labeledImages);
        
	//These are custom properties for zoom effect while slide-show

    render() {
        return (
            <div className="m-10">
                {/* <h1 className="text-center text-6xl  font-bold pb-10 ">
                    Contract_1 <span className="text-indigo-600">Filler here</span>
                </h1> */}

                <Zoom {...this.zoomInProperties}>
                    {this.unlabeledImages.map((each, index) => (
                        <div key={index} className="flex justify-center w-full h-full">
                            <img
                                className="w-3/4 object-cover rounded-lg shadow-xl"
                                src={this.getImageArray()[index].length > 0 ? this.getImageArray()[index] : each}
                                onClick={this.toggleImage}
                            />
                        </div>
                    ))}
                </Zoom>
            </div>
        );
    };
};

export default SlideshowSwap;