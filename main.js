// var changeShapeDiv = document.getElementById('change-shape');
// changeShapeDiv.addEventListener('click', function(){
// 	var shapeOne = document.getElementById('circle');
// 	var shapeTwo = document.getElementById('triangle');
// 	var shapeThree = document.getElementById('rectangle');
// 	var shapeFour = document.getElementById('inner-div');
// 	for(var i=0; i<4; i++){
// 		if(i==0){
// 			return shapeOne;
// 		}else if(i==1){
// 			return shapeTwo;
// 		}else if(i==2){
// 			return shapeThree;
// 		}else{
// 			return shapeFour;
// 			i=0;
// 		}
// 	}
// })
var changeColorDiv = document.getElementById('change-color');
changeColorDiv.addEventListener('click', function(){
    // console.log('hey!!');
    var box = document.getElementById('outer-box');
    box.style.backgroundColor= getBackgroundColor();
});

function getRandomColor(){
    var temp =  Math.random()*255;
    return temp;
}

function getBackgroundColor(){
    var r = getRandomColor();
    var g = getRandomColor();
    var b = getRandomColor();
    return "rgb("+r+","+g+", "+b+")";
}

var changeShapeDiv = document.getElementById('change-shape');
var currentShape = 'square';
changeShapeDiv.addEventListener('click', function(){
    var node = document.getElementById('inner-box');
    if(currentShape === 'square'){
        node.classList.add('circle');

       node.classList.remove('inner-div');

        currentShape = 'circle';
    }else if(currentShape === 'circle'){
        node.classList.remove('circle');

        node.classList.add('triangle');
        currentShape = 'triangle';
    }else if(currentShape === 'triangle'){
        node.classList.remove('triangle');

        node.classList.add('rectangle');
        currentShape = 'rectangle';
    }else{
        node.classList.remove('rectangle');

        node.classList.add('inner-div');
        currentShape = 'square';
    }
    console.log('yes');
});

function makeCircle(box){
    box.style.borderTopLeftRadius='50%';
    box.style.borderTopRightRadius='50%';
    box.style.borderBottomLeftRadius='50%';
    box.style.borderBottomRightRadius='50%';
}

function makeSquare(box){
    box.style.borderTopLeftRadius='0%';
    box.style.borderTopRightRadius='0%';
    box.style.borderBottomLeftRadius='0%';
    box.style.borderBottomRightRadius='0%';
}

function makeTriangle(box){

}