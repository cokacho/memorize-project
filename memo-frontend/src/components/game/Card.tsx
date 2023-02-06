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
  const cardStyles = 'text-black text-center m-2 p-4 border-2 text-xl rounded cursor-pointer w-32 ' + activeCardStyle;
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
          (<div className={''}>{props.type}</div>)
          :
          (<div>?</div>)
        }
      </div>

    </div>

  );
};

export default Card;