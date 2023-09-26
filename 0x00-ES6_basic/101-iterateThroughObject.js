export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const [i, value] of reportWithIterator.entries()) {
    if (i === reportWithIterator.lenth - 1) {
      employees += `${value} | `;
    } else {
      employees += value;
    }
  }
  return employees;
}
