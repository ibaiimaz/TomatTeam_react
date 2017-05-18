export default function () {
  function getDate() {
    //return new Date('2017-05-12T20:44:00');
    return new Date();//.getTime() - 6 * 60000;
  }

  return [{
    id: 2,
    userName: 'Member 2',
    time: getDate(),
    status: 1,
    helpAsked: false
  }, {
    id: 3,
    userName: 'Member 3',
    time: getDate(),
    status: 0,
    helpAsked: false
  }, {
    id: 4,
    userName: 'Member 4',
    time: getDate(),
    status: 2,
    helpAsked: true
  }, {
    id: 5,
    userName: 'Member 5',
    time: getDate(),
    status: 1,
    helpAsked: false
  }
  ];
}