const taskOne = document.querySelector('#task1');
taskOne.innerText = "Changed using innerText"; //innerText returns the text content of an element
const taskTwo = document.querySelector('#task2');
taskTwo.innerHTML = '<button type = "submit">Submit</button>'; //innerHTML insert HTML inside an element
document.body.style.backgroundColor ='#232323'; //access the body and change its style property directly
const items =  document.querySelectorAll('.item');
items.forEach(item => {
    item.style.border = '1px solid #000'; //loop through all matching elements and set border style
});
document.getElementById('task5').href = 'https://www.springboard.com/';

document.getElementById('task6').value = 'DOM Master';

document.getElementById('task7').classList.add('new-class');

const newButton = document.createElement('button');
newButton.innerText = 'Submit';
document.getElementById('task8').appendChild(newButton);

document.getElementById('task9').remove();