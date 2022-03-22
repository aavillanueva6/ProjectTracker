function partThree(projName, projType, wage, dueDate) {
  let now = moment();
  let formattedDueDate = moment(dueDate, 'MM/DD/YY');
  let currentDate = formattedDueDate.diff(now, 'days');
  console.log(currentDate);
}

partThree(1, 2, 3, '03/23/22');
