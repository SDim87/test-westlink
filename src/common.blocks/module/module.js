// get Data
const url = './data/data.json';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200) {
    const data = xhr.response.slice();
    const arrModule = Array.from(document.querySelectorAll('.module'));
    const riseBad = 'is-statistic-down';

    // проходим по модулям
    for (let i = 0; i < arrModule.length; i++) {
      const el = arrModule[i];
      const dataId = data[i].id;
      const dataName = data[i].name;
      const dataNumber = data[i].number;
      const dataPercent = data[i].percent;
      const dataRise = data[i].rise;

      const canvas = el.querySelector('.module__canvas');
      const name = el.querySelector('.module__name');
      const persent = el.querySelector('.module__percent-data');
      const number = el.querySelector('.module__number');
      const htmlCanvas = `<canvas class="module__circle" id="circle${dataId}" width="60" height="60"></canvas>`;

      // вставлям данные
      if (!dataRise) {
        el.classList.add(riseBad);
      }

      canvas.insertAdjacentHTML('beforeend', htmlCanvas);
      name.append(dataName);
      persent.append(dataPercent);
      number.append(dataNumber);

      // рисуем график
      const c = document.querySelector(`#circle${dataId}`);
      const ctx = c.getContext('2d');
      const pi = Math.PI;
      const rad = 2 * pi * (dataPercent / 100);

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.arc(30, 30, 28, 0, 2 * pi, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#000';
      ctx.arc(30, 30, 28, 0, rad, false);
      ctx.stroke();
    }
  } else {
    console.log(`Ошибка: статус ${xhr.status}`);
  }
};
