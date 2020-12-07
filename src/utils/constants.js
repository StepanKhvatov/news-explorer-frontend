export function checkMonth(number) {
  let month = null;
  if (number === 0) {
    month = 'Января';
  } else if (number === 1) {
    month = 'Февраля';
  } else if (number === 2) {
    month = 'Марта';
  } else if (number === 3) {
    month = 'Апреля';
  } else if (number === 4) {
    month = 'Мая';
  } else if (number === 5) {
    month = 'Июня';
  } else if (number === 6) {
    month = 'Июля';
  } else if (number === 7) {
    month = 'Августа';
  } else if (number === 8) {
    month = 'Сентября';
  } else if (number === 9) {
    month = 'Октября';
  } else if (number === 10) {
    month = 'Ноября';
  } else if (number === 11) {
    month = 'Декабря';
  }

  return month;
};

export function uniq(array) {
  return array.reduce((acc, current) => {
    current = current.trim();
    if (!acc.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, []);
};

export function getTime() {
  const date = new Date(Date.now());
  const pastDate = new Date(Date.now() - 86400000 * 3);
  const year = date.getFullYear();
  const pastYear = pastDate.getFullYear();
  let month = date.getMonth();
  let pastMonth = pastDate.getMonth();
  let day = date.getDate();
  let pastDay = pastDate.getDate();
  month = month + 1;
  pastMonth = pastMonth + 1;

  if (day < 10) {
    day = `0${day}`;
  }

  if (pastDay < 10) {
    pastDay = `0${pastDay}`;
  }

  if (month < 10) {
    month = `0${month}`
  }

  if (pastMonth < 10) {
    pastMonth = `0${pastMonth}`
  }

  console.log(year);
  console.log(pastMonth);

  return {
    day: day,
    pastDay: pastDay,
    month: month,
    pastMonth: pastMonth,
    year: year,
    pastYear: pastYear,
  }
}
