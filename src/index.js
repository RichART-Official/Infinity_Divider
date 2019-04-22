// Data objects. All content (for now) is beain loaded from this object. Maybe later on content can be loaded in via JSON.
const data = {
    item1: {
        img: 'static/img/1.jpg',
        title: 'item1',
        description: 'Lorem ipsum dolor sit amet item1',
        url: '#1'
    },
    item2: {
        img: 'static/img/2.gif',
        title: 'item2',
        description: 'Lorem ipsum dolor sit amet item2',
        url: '#2'
    },
    item3: {
        img: 'static/img/3.jpg',
        title: 'item3',
        description: 'Lorem ipsum dolor sit amet item3',
        url: '#3'
    }
}

// Array where all content objects will be placed in
let contents = []

//Defines The thumbnail
class Thumbnail {

    constructor(img, title, description, url){
        this.img = img;
        this.title = title;
        this.description = description;
        this.url = url;
    };

    // Create HTML-element
    display(){
        const parent = document.querySelector('.container');

        this.element = document.createElement('div');
        this.element.className = 'content';
        this.element.innerHTML = '<img src='+ this.img +' alt="content"/>';
        parent.insertBefore(this.element, parent.lastChild);

    };

    // Position the HTML-element somewhere on the CSS Grid
    position(){

        // const stylesheet = document.styleSheets[0];
        // let row = "grid-row:"+ x+"/"+w;
        // let column = "grid-column:"+y+"/"+h;
        // stylesheet.insertRule(object + "{"+row+";"+ column+"}", 1);
    };

};

// Loop through all data objects and create instances of content-elements for them
for(i = 0; i < Object.keys(data).length; i++){
    let currentData = data['item' + (i + 1)];

    contents[i] = new Thumbnail(
        currentData['img'],
        currentData['title'],
        currentData['description'],
        currentData['url']
    );
    contents[i].display();
    contents[i].position();
}

// Class that takes care of creating all the content-elements

// Class Content(){
//     const object = '.content';

//     constructor(img, title, description, url){
//         this.img = img;
//         this.title = title;
//         this.description = description;
//         this.url = url;
//     }



//     placeElements(object,x,y,w,h){
//         const stylesheet = document.styleSheets[0];
//         let row = "grid-row:"+ x+"/"+w;
//         let column = "grid-column:"+y+"/"+h;
//         stylesheet.insertRule(object + "{"+row+";"+ column+"}", 1);
//     };

//
// };


// createElement(img[2]);

// placeElements(
//     object,
//     generatePos().x,
//     generatePos().y,
//     generatePos().w,
//     generatePos().h
// )



// // object + '{grid-row:' + generatePos().x +"/"+ generatePos().w +'; grid-column: ' + generatePos().y +"/"+ generatePos().h +';'}',1
