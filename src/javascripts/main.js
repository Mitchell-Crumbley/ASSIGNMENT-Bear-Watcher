import '../styles/main.scss';
import pageIntro from './components/pageIntroduction';
import showForm from './components/showForm';
import river from './components/river';
import handleButtonEvents from './helpers/data/domEvents';
import { bears } from './helpers/data/bearArray';

const init = () => {
  pageIntro();
  showForm();
  river(bears);
  handleButtonEvents();
};

init();
