import { bears } from './bearArray';
import river from '../../components/river';

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#bearImage').value;
  const fishCaught = [''];
  const missedFish = [''];

  const bearObj = {
    name,
    imageUrl,
    fishCaught,
    missedFish
  };
  bears.push(bearObj);
  river(bears);
};

export default getFormInfo;
