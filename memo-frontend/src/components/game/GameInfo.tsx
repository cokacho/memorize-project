import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {getLocal} from "../../services/LocalStoreService";

const GameInfo = () => {
  const score = useSelector((state: RootState) => state.player.score);
  const user = getLocal(process.env.REACT_APP_STORE_USER_KEY, true) || null;
  return (
    <div>
      <div className={'grid place-items-center w-screen text-4xl font-bold'} >Game User Info: {user?.email}</div>
      <div className={'grid place-items-center w-screen'} >Score: {score} points</div>
    </div>
  );
}

export default GameInfo;