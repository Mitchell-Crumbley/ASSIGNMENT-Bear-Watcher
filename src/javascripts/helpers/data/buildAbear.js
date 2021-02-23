import printToDom from '../../components/printToDom';

const buildAbear = (array) => {
  let domString = '';
  array.forEach((item, i) => {
    domString += `<div class='card my-2 text-center' style ='width: 18rem;' id='${i}'>
    <img src=${array[i].imageUrl} class="card-img-top">
    <div class='card-header'>${array[i].name}</div>
       <button type="button" class='btn btn-danger'>Delete</button>
      </div>`;
  });
  printToDom('#bears', domString);
};

export default buildAbear;
