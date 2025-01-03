import { LightningElement,api } from 'lwc';

export default class P2cParent extends LightningElement {
    
    carouselData = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description :"First card description.",
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Second Card",
            description :"Second card description.",
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Third Card",
            description :"Third card description.",
        }
    ]
    parentinput = 10;

    handleChangeInput(event){
        this.parentinput = event.target.value;
    }
    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
    
    
}