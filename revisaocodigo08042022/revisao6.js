//document.body.innerHTML = 'This was modified with JS';
//document.body.innerHTML = '<h2>This is a H2</h2>';

document.querySelector('p').innerHTML = 'query selector here';
document.getElementById('first').innerHTML = 'Get element by id modified';
document.getElementsByClassName('className').innerHTML = 'Get element by class modified';
document.getElementsByTagName('li')[0].innerHTML = 'Here was modified by tag name';

document.querySelector('p').style.backgroundColor = 'blue';
document.getElementById('first').style.fontFamily = "arial";
document.getElementsByTagName('li')[1].style.color = 'red';

let paragraph = document.createElement('p');
paragraph.id = 'createdinjs';
paragraph.innerHTML = 'This paragraph was created and styled with js';
paragraph.style.color = 'brown';
paragraph.style.fontWeight = 'bold';
paragraph.style.fontSize = '24px'
document.body.appendChild(paragraph);

paragraph.onclick = function() {
    paragraph.style.backgroundColor = 'orange'
};