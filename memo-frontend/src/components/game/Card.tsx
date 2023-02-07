import {cardTurnOver} from "../../app/feature/GameSlice";
import {useDispatch} from "react-redux";

const Card = (props: {
  index: number,
  type: string;
  image: string;
  isTurnOver: boolean;
}) => {
  let activeCardStyle = '';
  if (props.isTurnOver) {
    activeCardStyle = 'border-indigo-300'
  }
  const cardStyles = 'flex text-black text-center m-2 p-2 border-2 text-xl' +
    ' rounded cursor-pointer w-40 h-40 justify-center items-center' + activeCardStyle;
  const dispatcher = useDispatch();

  const clickHandler = () => {
    dispatcher(cardTurnOver({
      index: props.index,
      isTurnOver: !props.isTurnOver
    }));
  }

  return (
    <div>

      <div
        onClick={() => clickHandler()}
        className={cardStyles}
      >
        {props.isTurnOver ?
          (<img src={props.image} className={''} />)
          :
          (<div className={''} >?</div>)
        }
      </div>

    </div>

  );
};

export default Card;