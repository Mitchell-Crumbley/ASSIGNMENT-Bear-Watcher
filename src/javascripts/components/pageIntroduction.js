import printToDom from './printToDom';

const pageIntro = () => {
  let domString = '';
  domString += `<h1>Bear Watcher</h1>
  <div class="introText mt-2 ml-5">
    <p1>
      Hello! Before you is an application designed to allow a user to add bears to a watchlist and track the fish they capture.
    </p1>
  </div>
  `;
  printToDom('#introduction', domString);
};

export default pageIntro;
