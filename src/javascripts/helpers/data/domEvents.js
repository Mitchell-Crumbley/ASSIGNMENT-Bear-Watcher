import getFormInfo from './getFormInfo';
import { fishButtons } from './bearArray';
import startMusic from '../startMusic';

const handleButtonEvents = () => {
  document.querySelector('#bearForm').addEventListener('submit', getFormInfo);
  document.querySelector('#bearForm').addEventListener('click', startMusic);
  document.querySelector('#river').addEventListener('click', fishButtons);
};

export default handleButtonEvents;
