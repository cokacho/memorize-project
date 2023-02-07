import reducers from '../app/feature/GameSlice';

test('test store initial state', () => {
  let state;
  state = reducers(undefined, {
    type: undefined
  });
  expect(state).toEqual({
    time: 0,
    turn_blocked: false,
    selected_cards: [],
    player: {id: 0, name: '', email: '', type: 'player', game_id: 0, channel: '', score: 0, game_user_id: 0},
    cards: []
  });
});

test('test store set Game User', () => {
  let state;
  state = reducers({
    time: 0,
    turn_blocked: false,
    selected_cards: [],
    player: {
      id: 1,
      name: 'nel',
      email: 'nel.esc.cas@gmail.com',
      type: 'player',
      game_id: 28,
      channel: '7b1db217-e222-482b-896a-5808c65e5692',
      score: 0,
      game_user_id: 0
    },
    cards: []
  }, {type: 'game/setGameUser', payload: 20});
  expect(state).toEqual({
    time: 0,
    turn_blocked: false,
    selected_cards: [],
    player: {
      id: 1,
      name: 'nel',
      email: 'nel.esc.cas@gmail.com',
      type: 'player',
      game_id: 28,
      channel: '7b1db217-e222-482b-896a-5808c65e5692',
      score: 0,
      game_user_id: 20
    },
    cards: []
  });
});

test('test store set channel', () => {
  let state;
  state = reducers({
    time: 0,
    turn_blocked: false,
    selected_cards: [],
    player: {
      id: 1,
      name: 'nel',
      email: 'nel.esc.cas@gmail.com',
      type: 'player',
      game_id: 0,
      channel: '',
      score: 0,
      game_user_id: 0
    },
    cards: []
  }, {type: 'game/setChannel', payload: {id: 28, channel: '7b1db217-e222-482b-896a-5808c65e5692'}});
  expect(state).toEqual({
    time: 0,
    turn_blocked: false,
    selected_cards: [],
    player: {
      id: 1,
      name: 'nel',
      email: 'nel.esc.cas@gmail.com',
      type: 'player',
      game_id: 28,
      channel: '7b1db217-e222-482b-896a-5808c65e5692',
      score: 0,
      game_user_id: 0
    },
    cards: []
  });
});

test('test store card Turn Over', () => {
  let state;
  state = reducers({
    time: 0,
    turn_blocked: false,
    selected_cards: [],
    player: {
      id: 1,
      name: 'nel',
      email: 'nel.esc.cas@gmail.com',
      type: 'player',
      game_id: 28,
      channel: '7b1db217-e222-482b-896a-5808c65e5692',
      score: 0,
      game_user_id: 20
    },
    cards: [{id: 5, type: '5', image: '', isTurnOver: false}, {id: 4, type: '4', image: '', isTurnOver: false}, {
      id: 1,
      type: '1',
      image: '',
      isTurnOver: false
    }, {id: 8, type: '8', image: '', isTurnOver: false}, {id: 1, type: '1', image: '', isTurnOver: false}, {
      id: 7,
      type: '7',
      image: '',
      isTurnOver: false
    }, {id: 5, type: '5', image: '', isTurnOver: false}, {id: 3, type: '3', image: '', isTurnOver: false}, {
      id: 2,
      type: '2',
      image: '',
      isTurnOver: false
    }, {id: 4, type: '4', image: '', isTurnOver: false}, {id: 8, type: '8', image: '', isTurnOver: false}, {
      id: 3,
      type: '3',
      image: '',
      isTurnOver: false
    }, {id: 2, type: '2', image: '', isTurnOver: false}, {id: 6, type: '6', image: '', isTurnOver: false}, {
      id: 6,
      type: '6',
      image: '',
      isTurnOver: false
    }, {id: 7, type: '7', image: '', isTurnOver: false}]
  }, {type: 'game/cardTurnOver', payload: {index: 0, isTurnOver: true}});
  expect(state).toEqual({
    time: 0,
    turn_blocked: false,
    selected_cards: [0],
    player: {
      id: 1,
      name: 'nel',
      email: 'nel.esc.cas@gmail.com',
      type: 'player',
      game_id: 28,
      channel: '7b1db217-e222-482b-896a-5808c65e5692',
      score: 0,
      game_user_id: 20
    },
    cards: [{id: 5, type: '5', image: '', isTurnOver: true}, {id: 4, type: '4', image: '', isTurnOver: false}, {
      id: 1,
      type: '1',
      image: '',
      isTurnOver: false
    }, {id: 8, type: '8', image: '', isTurnOver: false}, {id: 1, type: '1', image: '', isTurnOver: false}, {
      id: 7,
      type: '7',
      image: '',
      isTurnOver: false
    }, {id: 5, type: '5', image: '', isTurnOver: false}, {id: 3, type: '3', image: '', isTurnOver: false}, {
      id: 2,
      type: '2',
      image: '',
      isTurnOver: false
    }, {id: 4, type: '4', image: '', isTurnOver: false}, {id: 8, type: '8', image: '', isTurnOver: false}, {
      id: 3,
      type: '3',
      image: '',
      isTurnOver: false
    }, {id: 2, type: '2', image: '', isTurnOver: false}, {id: 6, type: '6', image: '', isTurnOver: false}, {
      id: 6,
      type: '6',
      image: '',
      isTurnOver: false
    }, {id: 7, type: '7', image: '', isTurnOver: false}]
  });
});
