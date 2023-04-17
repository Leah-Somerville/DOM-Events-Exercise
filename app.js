// 1a
const button1 = document.querySelector(`button`);

// 1b
button1.addEventListener('click', function(){
    alert(`You clicked the first button! Congrats!`);
})

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener('mouseenter', function(){
    alert(`You hovered over the h3 element! Congrats!`);
})

// 3a
const form = document.querySelector(`form`);
console.dir(form)
// 3b
form.addEventListener(`submit`, p => {
    p.preventDefault();

    const enteredText = form.elements.entry.innerText;


    const newText = document.createElement(`p`);
    newText.innerText = `${enteredText}`;

    // const body = document.querySelector(`body`);

    // body.append(newText);
    // alert(enteredText);

    // console.dir(newText);
    alert(`${newText}`);
})