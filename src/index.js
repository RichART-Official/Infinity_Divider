function generatePos(){
    let x = Math.floor(Math.random()*12 );
    let y = Math.floor(Math.random()*6 );
    let w = generateSize(x);
    let h = generateSize(y);

    function generateSize(pos){
        let size;
        while(size < 2) {
            size = Math.floor(Math.random()*10/1.5);
        }
        return pos + size;
    }

    return {
        x: x,
        y: y,
        w: w,
        h: h
    };
}

const object = '.content';
const stylesheet = document.styleSheets[0];

console.log(generatePos());

function placeElements(object,x,y,w,h){
    let row = "grid-row:"+ x+"/"+w;
    let column = "grid-column:"+y+"/"+h;
    stylesheet.insertRule(object + "{"+row+";"+ column+"}", 1);
}

placeElements(
    object,
    generatePos().x,
    generatePos().y,
    generatePos().w,
    generatePos().h
)

// object + '{grid-row:' + generatePos().x +"/"+ generatePos().w +'; grid-column: ' + generatePos().y +"/"+ generatePos().h +';'}',1
