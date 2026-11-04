// Opening hours are kept here and in the markup; the script only says whether we are open right now.
const HOURS = {
  weekday: [7 * 60 + 30, 21 * 60],
  weekend: [9 * 60, 21 * 60],
};

function moscowNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Moscow', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  return { day: get('weekday'), minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

const clock = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;

function describe() {
  const { day, minutes } = moscowNow();
  const weekend = day === 'Sat' || day === 'Sun';
  const [open, close] = weekend ? HOURS.weekend : HOURS.weekday;
  if (minutes >= open && minutes < close) {
    return { open: true, short: `Открыто до ${clock(close)}`, long: `Сейчас открыто, до ${clock(close)}` };
  }
  const tomorrowWeekend = day === 'Fri' || day === 'Sat';
  const next = minutes < open ? open : (tomorrowWeekend ? HOURS.weekend[0] : HOURS.weekday[0]);
  const when = minutes < open ? 'сегодня' : 'завтра';
  return { open: false, short: `Закрыто, откроемся ${when} в ${clock(next)}`, long: `Сейчас закрыто. Откроемся ${when} в ${clock(next)}` };
}

function render() {
  const state = describe();
  document.querySelectorAll('[data-status]').forEach((el) => {
    el.textContent = state.short;
    el.classList.toggle('is-open', state.open);
  });
  document.querySelectorAll('[data-status-long]').forEach((el) => { el.textContent = state.long; });
}

render();
setInterval(render, 60 * 1000);
