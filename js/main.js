const inputElement = document.querySelector('#input');
const ulElement = document.querySelector('.list-group');
let listElement = [];

inputElement.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.keyCode === 13) && inputElement.value) {
    listElement.unshift({
      content: inputElement.value,
      done: false,
      selected: false,
    });

    inputElement.value = '';
    wrapperElement();
  }
});

function wrapperElement() {
  ulElement.innerHTML = '';

  for (let index = 0; index < listElement.length; index++) {
    const itemElement = listElement[index];
    const liElement = document.createElement('li');
    liElement.className = 'list-group-item';
    ulElement.append(liElement);

    const divElement = document.createElement('div');
    divElement.className = 'form-group form-chick';
    liElement.append(divElement);

    const checkboxElement = document.createElement('input');
    checkboxElement.className = 'form-check-input';
    checkboxElement.id = 'exampleCheck' + index;
    checkboxElement.setAttribute('type', 'checkbox');
    divElement.append(checkboxElement);
    checkboxElement.checked = itemElement.selected;

    const labelElement = document.createElement('label');
    labelElement.className = 'form-check-label';
    labelElement.setAttribute('for', 'exampleCheck' + index);
    labelElement.innerText = itemElement.content;
    labelElement.style = `cursor:pointer; margin:0 10px`;
    divElement.append(labelElement);
    if (itemElement.done) {
      labelElement.className += ' todoDone';
    }

    const doneElement = document.createElement('button');
    doneElement.className = 'btn btn-done';
    doneElement.setAttribute('type', 'button');
    doneElement.innerText = 'Done';
    divElement.append(doneElement);

    const removeElement = document.createElement('button');
    removeElement.className = 'btn btn-remove';
    removeElement.setAttribute('type', 'button');
    removeElement.innerText = 'Remove';
    divElement.append(removeElement);

    doneElement.addEventListener('click', () => {
      itemElement.done = !itemElement.done;
      wrapperElement();
    });

    checkboxElement.addEventListener('change', () => {
      itemElement.selected = checkboxElement.checked;
    });

    removeElement.addEventListener('click', () => {
      listElement = listElement.filter(curentItem => curentItem !== itemElement);
      wrapperElement();
    });
  }
} 

document.querySelector('#doneAction').addEventListener('click', () => {
  for (const itemElement of listElement) {
    if (itemElement.selected) {
      itemElement.done = true;
      itemElement.selected = false;
    }
  }
  wrapperElement();
});

document.querySelector('#restireAction').addEventListener('click', () => {
  for (const itemElement of listElement) {
    if (itemElement.selected) {
      itemElement.done = false;
      itemElement.selected = false;
    }
  }
  wrapperElement();
});

document.querySelector('#removeAction').addEventListener('click', () => {
  listElement = listElement.filter((itemElement) => !itemElement.selected);
  wrapperElement();
});

document.querySelector('.btn-outline-primary').addEventListener('click', () => {
  for (const itemElement of listElement) {
    itemElement.selected = true;
  }
  wrapperElement();
});

// ! 1
/*
`
const liElement = document.createElement('li');
liElement.className = 'list-group-item';
ulElement.append(liElement);

const divElement = document.createElement('div');
divElement.className = 'form-group form-chick';
liElement.append(divElement);

const checkboxElement = document.createElement('input');
checkboxElement.className = 'form-check-input';
checkboxElement.setAttribute('type', 'checkbox');
divElement.append(checkboxElement);

const labelElement = document.createElement('label');
labelElement.className = 'form-check-label';
labelElement.setAttribute('for', 'exampleCheck1');
labelElement.innerText = ;
labelElement.style=`cursor:pointer; margin:0 10px`
divElement.append(labelElement);

const doneElement = document.createElement('button');
doneElement.className = 'btn btn-done';
doneElement.setAttribute('type', 'button');
doneElement.innerText = 'Done';
divElement.append(doneElement);

const removeElement = document.createElement('button');
removeElement.className = 'btn btn-remove';
removeElement.setAttribute('type', 'button');
removeElement.innerText = 'Remove';
divElement.append(removeElement);
`
*/

//! 2

/*
`
const inputElement = document.querySelector('#input');
const ulElement = document.querySelector('#list');

const listElemetn = [];

inputElement.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.keyCode === 13) && inputElement.value) {
    listElemetn.unshift({
      content: inputElement.value,
      done: false,
    });

    inputElement.value = '';
    wrapperElement();
  }
});

function wrapperElement() {
  ulElement.innerHTML = '';

  for (let index = 0; index < listElemetn.length; index++) {
    const itemTodo = listElemetn[index];
    const liElement = document.createElement('li');
    liElement.className = 'list-group-item';
    ulElement.append(liElement);

    const divElement = document.createElement('div');
    divElement.className = 'form-group form-chick';
    liElement.append(divElement);

    const checkboxElement = document.createElement('input');
    checkboxElement.className = 'form-check-input';
    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.id = 'exampleCheck' + index;
    checkboxElement.checked = itemTodo.selected;
    divElement.append(checkboxElement);

    const labelElement = document.createElement('label');
    labelElement.className = 'form-check-label';
    labelElement.setAttribute('for', 'exampleCheck' + index);
    labelElement.innerText = itemTodo.content;
    labelElement.style = 'cursor:pointer; margin:0 10px';
    divElement.append(labelElement);
    if (itemTodo.done) {
      labelElement.className = ' todoDone';
    }

    const doneElement = document.createElement('button');
    doneElement.className = 'btn btn-done';
    doneElement.setAttribute('type', 'button');
    doneElement.innerText = 'Done';
    divElement.append(doneElement);

    const removeElement = document.createElement('button');
    removeElement.className = 'btn btn-remove';
    removeElement.setAttribute('type', 'button');
    removeElement.innerText = 'Remove';
    divElement.append(removeElement);

    doneElement.addEventListener('click', () => {
      itemTodo.done = !itemTodo.done;
      wrapperElement();
    });


  }

}
`
*/
