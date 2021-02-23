import printToDom from './printToDom';

const showForm = () => {
  let domString = '';
  domString += `<form id="bearForm">
  <div class="card m-3 justify-content-center">
    <div class="card-body text-center">  
      <h4>
      Daaa Bears
      </h4>
        <div id="error-message"></div>
          <div class="d-flex-wrap col-md-8 offset-md-2">
            <label for="inlineFormInput">Da Bear's Name: </label>
            <input type="text" class="form-control" id="bearName" placeholder="Winnie" required>
            <label for="inlineFormInput">Image: </label>
            <input type="text" class="form-control" id="bearImage" placeholder="Enter image url" required>
            <button id="sort" class="btn btn-primary m-2">Submit!</button>
          </div>
        </div>
  </div>
</form>`;
  printToDom('#theform', domString);
};

export default showForm;
