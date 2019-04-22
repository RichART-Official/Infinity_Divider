import Data from './js/data.js';
import Thumbnail from './js/thumbnail.js';

// Array where all content objects will be placed in
let thumbnails = []

// Loop through all data objects and create instances of content-elements for them
for (let i = 0; i < Object.keys(Data).length; i++){
    let post = Data['item' + (i + 1)];
    //Initialise elements
    thumbnails[i] = new Thumbnail(
        post['img'],
        post['title'],
        post['description'],
        post['url']
    );
    // Initialise functions within elements
    thumbnails[i].display();
    thumbnails[i].position();
}