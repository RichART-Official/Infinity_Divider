// Array where all content objects will be placed in
let contents = []

// Loop through all data objects and create instances of content-elements for them
for(i = 0; i < Object.keys(data).length; i++){
    let currentData = data['item' + (i + 1)];
    //Initialise elements
    contents[i] = new Thumbnail(
        currentData['img'],
        currentData['title'],
        currentData['description'],
        currentData['url']
    );
    // Initialise functions within elements
    contents[i].display();
    contents[i].position();
}