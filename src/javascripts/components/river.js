import printToDom from './printToDom';

const river = (bears) => {
  let domString = '';
  bears.forEach((bear, i) => {
    const fishString = [];
    bear.fishCaught.forEach((fish) => fishString.push(fish));
    domString += `<div class='card mt-2 text-center' style ='width: 18rem;' id='${i}'>
    <img src=${bear.imageUrl} class="card-img-top">
    <div class='card-header'>${bear.name}</div>
    <div class="card-body">
    <p class="card-text">
      <div class="caught">
        <li> It Caught A Fish!: ${bear.fishCaught[0]} </li>
        <li> It Missed A Fish!: ${bear.missedFish[0]} </li>
        <li> Total fish caught: ${fishString.length - 1} </li>
      </div>
    </p>
    </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-secondary caught" id="${i}"> Caught a fish!
        </button>
      </div>
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-secondary missed" id="${i}"> Missed a fish!
          </button>
      </div>
    </div>`;
  });
  printToDom('#river', domString);
};

export default river;
