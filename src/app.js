"use strict";

import { initializeList, addItem, hideDialog } from './handlers';

initializeList();

const taskInput = document.querySelector('input.task');

taskInput.addEventListener('keyup', (e) => {
  if (e.which === 13 && taskInput.value) {
    addItem(taskInput.value);
    taskInput.value = '';
  }
});

document.querySelector('#dialog').addEventListener('click', event => {
  if(event.target.id !== 'dialog') {
    return;
  }
  hideDialog();
});