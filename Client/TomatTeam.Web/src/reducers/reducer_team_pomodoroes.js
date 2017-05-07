export default function() {
    function getDate() {
        return new Date('2017-05-01T09:04:00');
    }

    return [{
        id: 2,
        userName: 'Member 2',
        time: getDate(),
        status: 1
      },{
        id: 3,
        userName: 'Member 3',
        time: getDate(),
        status: 1
      },{
        id: 4,
        userName: 'Member 4',
        time: getDate(),
        status: 1
      },{
        id: 5,
        userName: 'Member 5',
        time: getDate(),
        status: 1
      }
    ];
}