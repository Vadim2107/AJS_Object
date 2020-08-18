/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
const orderByProps = (obj, arr) => {
  const array = [];
  const arrProps = [];

  for (const prop in obj) {
    const object = {};
    object.key = prop;
    object.value = obj[prop];
    array.push(object);
  }

  array.sort((a, b) => {
    const keyA = a.key.toLowerCase();
    const keyB = b.key.toLowerCase();
    if (keyA < keyB) {
      return -1;
    } if (keyA > keyB) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < arr.length; i++) {
    const keyFind = array.find((item) => item.key === arr[i]);
    const index = array.findIndex((item) => item.key === arr[i]);
    array.splice(index, 1);
    arrProps.push(keyFind);
  }
  const propsArr = arrProps.concat(array);

  return propsArr;
};

const showAttacks = (obj) => {
  const arrAttacks = obj.special;
  for (let i = 0; i < arrAttacks.length; i++) {
    arrAttacks.forEach((item) => {
      if (item.description === undefined) {
        item.description = 'Описание недоступно';
      }
    });
  }
  return arrAttacks;
};

export { orderByProps, showAttacks };
