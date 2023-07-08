const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);
copied = { ...holidays[christmas] }; // Make a copy of the Christmas object

copied.name = 'X-mas'; // Change the name to X-mas

// Fix the date to midnight
copied.date.setHours(0);
copied.date.setMinutes(0);
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);
console.log('ID change:', holidays[christmas].id !== copied.id ? copied.id : false);
console.log('Name change:', holidays[christmas].name !== copied.name ? copied.name : false);
console.log('Date change:', holidays[christmas].date !== copied.date ? copied.date : false);

if (isEarlier) {
  holidays[christmas] = copied; // Apply the changes to the holidays object
}
const firstHolidayTimestamp = Math.min(
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
  );
  const lastHolidayTimestamp = Math.max(
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
  );
  
  const firstHolidayDate = new Date(firstHolidayTimestamp);
  const lastHolidayDate = new Date(lastHolidayTimestamp);
  
  const firstDay = String(firstHolidayDate.getDate()).padStart(2, '0');
  const firstMonth = String(firstHolidayDate.getMonth() + 1).padStart(2, '0');
  const lastDay = String(lastHolidayDate.getDate()).padStart(2, '0');
  const lastMonth = String(lastHolidayDate.getMonth() + 1).padStart(2, '0');
  
  console.log(`${firstDay}/${firstMonth}/${currentYear}`);
  console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomHolidayKey = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomHolidayKey];
const randomHolidayDate = randomHoliday.date;
const randomDay = String(randomHolidayDate.getDate()).padStart(2, '0');
const randomMonth = String(randomHolidayDate.getMonth() + 1).padStart(2, '0');

console.log(`${randomDay}/${randomMonth}/${currentYear}`);
