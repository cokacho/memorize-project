export const DefaultCards = [
  {
    id: 1,
    type: '1',
    image: '',
    isTurnOver: false
  },
  {
    id: 2,
    type: '2',
    image: '',
    isTurnOver: false
  },
  {
    id: 3,
    type: '3',
    image: '',
    isTurnOver: false
  },
  {
    id: 4,
    type: '4',
    image: '',
    isTurnOver: false
  },
  {
    id: 5,
    type: '5',
    image: '',
    isTurnOver: false
  },
  {
    id: 6,
    type: '6',
    image: '',
    isTurnOver: false
  },
  {
    id: 7,
    type: '7',
    image: '',
    isTurnOver: false
  },
  {
    id: 8,
    type: '8',
    image: '',
    isTurnOver: false
  }
];


export const CountryCards = [
  {
    id: 1,
    type: '1',
    image: './cards/alemania.jpg',
    isTurnOver: false
  },
  {
    id: 2,
    type: '2',
    image: './cards/arabia_saudita.jpg',
    isTurnOver: false
  },
  {
    id: 3,
    type: '3',
    image: './cards/argentina.jpg',
    isTurnOver: false
  },
  {
    id: 4,
    type: '4',
    image: './cards/australia.jpg',
    isTurnOver: false
  },
  {
    id: 5,
    type: '5',
    image: './cards/brasil.jpg',
    isTurnOver: false
  },
  {
    id: 6,
    type: '6',
    image: './cards/canada.jpg',
    isTurnOver: false
  },
  {
    id: 7,
    type: '7',
    image: './cards/catar.jpg',
    isTurnOver: false
  },
  {
    id: 8,
    type: '8',
    image: './cards/chile.jpg',
    isTurnOver: false
  },
  {
    id: 9,
    type: '9',
    image: './cards/china.jpg',
    isTurnOver: false
  },
  {
    id: 10,
    type: '10',
    image: './cards/corea_del_norte.jpg',
    isTurnOver: false
  },
  {
    id: 11,
    type: '11',
    image: './cards/costa_rica.jpg',
    isTurnOver: false
  },
  {
    id: 12,
    type: '12',
    image: './cards/ecuador.jpg',
    isTurnOver: false
  },
  {
    id: 13,
    type: '13',
    image: './cards/egipto.jpg',
    isTurnOver: false
  },
  {
    id: 14,
    type: '14',
    image: './cards/escocia.jpg',
    isTurnOver: false
  },
  {
    id: 15,
    type: '15',
    image: './cards/espana.jpg',
    isTurnOver: false
  },
  {
    id: 16,
    type: '16',
    image: './cards/finlandia.jpg',
    isTurnOver: false
  },
  {
    id: 17,
    type: '17',
    image: './cards/francia.jpg',
    isTurnOver: false
  },
  {
    id: 18,
    type: '18',
    image: './cards/gales.jpg',
    isTurnOver: false
  },
  {
    id: 19,
    type: '19',
    image: './cards/grecia.jpg',
    isTurnOver: false
  },
  {
    id: 20,
    type: '20',
    image: './cards/groenlandia.jpg',
    isTurnOver: false
  },
  {
    id: 21,
    type: '21',
    image: './cards/india.jpg',
    isTurnOver: false
  },
  {
    id: 22,
    type: '22',
    image: './cards/inglaterra.jpg',
    isTurnOver: false
  },
  {
    id: 23,
    type: '23',
    image: './cards/islandia.jpg',
    isTurnOver: false
  },
  {
    id: 24,
    type: '24',
    image: './cards/italia.jpg',
    isTurnOver: false
  },
  {
    id: 25,
    type: '25',
    image: './cards/jamaica.jpg',
    isTurnOver: false
  },
  {
    id: 26,
    type: '26',
    image: './cards/japon.jpg',
    isTurnOver: false
  },
  {
    id: 27,
    type: '27',
    image: './cards/madagascar.jpg',
    isTurnOver: false
  },
  {
    id: 28,
    type: '28',
    image: './cards/mexico.jpg',
    isTurnOver: false
  },
  {
    id: 29,
    type: '29',
    image: './cards/islandia.jpg',
    isTurnOver: false
  },
  {
    id: 30,
    type: '30',
    image: './cards/nepal.jpg',
    isTurnOver: false
  },
  {
    id: 31,
    type: '31',
    image: './cards/noruega.jpg',
    isTurnOver: false
  },
  {
    id: 32,
    type: '32',
    image: './cards/nueva_zelanda.jpg',
    isTurnOver: false
  },
  {
    id: 33,
    type: '33',
    image: './cards/peru.jpg',
    isTurnOver: false
  },
  {
    id: 34,
    type: '34',
    image: './cards/reino_unido.jpg',
    isTurnOver: false
  },
  {
    id: 35,
    type: '35',
    image: './cards/rusia.jpg',
    isTurnOver: false
  },
  {
    id: 36,
    type: '36',
    image: './cards/sudafrica.jpg',
    isTurnOver: false
  },
  {
    id: 37,
    type: '37',
    image: './cards/suecia.jpg',
    isTurnOver: false
  },
  {
    id: 38,
    type: '38',
    image: './cards/tailandia.jpg',
    isTurnOver: false
  },
  {
    id: 39,
    type: '39',
    image: './cards/ucrania.jpg',
    isTurnOver: false
  },
  {
    id: 40,
    type: '40',
    image: './cards/usa.jpg',
    isTurnOver: false
  },
  {
    id: 41,
    type: '41',
    image: './cards/yemen.jpg',
    isTurnOver: false
  },
];


export const getRangeIdCards = (from: number, to:number) => {
  if (from <= 0 || from >= to || from >= CountryCards.length ) {
    from = 1;
  }

  if (to <= 0 || to <= from || to > CountryCards.length) {
    to = CountryCards.length;
  }

  return CountryCards.filter((card) => card.id >= from && card.id <= to);
}