import React from 'react';

import Timer from './timer';
import PomodoroStatus from './pomodoro_status';

const PomodoroListItem = (props) => {
  return (
    <li className="list-group-item row"> 
      <div className="col-xs-4 col-md-4 member-avatar">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzE5IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMxOSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTViZmUxMmZkMDggdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWJmZTEyZmQwOCI+PHJlY3Qgd2lkdGg9IjMxOSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTcuOTIxODc1IiB5PSI5Ny4yIj4zMTl4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+" 
        alt="..." />
      </div>
      <div className="col-xs-8 col-md-8">
        <Timer duration={30 * 60 * 1000} currentTime={new Date()} time={props.pomodoro.time} />
        <PomodoroStatus status={props.pomodoro.status} />
      </div>
    </li>
  );
};

export default PomodoroListItem;