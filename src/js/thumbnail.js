//Defines The thumbnail
class Thumbnail {
    constructor(img, title, description, url){
        this.img = img;
        this.title = title;
        this.description = description;
        this.url = url;
        this.x;
        this.y;
        this.w;
        this.h;
    };

    // Create HTML-element
    display(){
        const parent = document.querySelector('.container');

        this.element = document.createElement('a');
        this.element.href = this.url;
        this.element.className = 'content';
        this.element.innerHTML = '<img src='+ this.img +' alt='+this.title+'/>';
        parent.insertBefore(this.element, parent.lastChild);

    };

    // Create and add position to element somewhere on the CSS grid.
    position(){
        // Calculate width
        let generateSize = (pos) => {
            let size;
            while(size > 3) {
                size = Math.floor(Math.random()*10/1.5);
            }
            return pos + size;
        }

        // Determine position and size + initiate variables
        this.x = Math.floor(Math.random()*12 );
        this.y = Math.floor(Math.random()*6 );
        this.w = generateSize(this.x);
        this.h = generateSize(this.y);

        // Add CSS for size and witdth to element
        this.element.style.gridColumnStart = this.x;
        this.element.style.gridRowStart = this.y;

        this.element.style.gridColumnEnd = this.w;
        this.element.style.gridRowEnd = this.h;
    }
};

export default Thumbnail;