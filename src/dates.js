import { format, addDays } from 'date-fns';

const now = new Date();
const taskFormat = "yyyy-MM-dd";

export const formattedDate = format(now, taskFormat);
console.log(formattedDate);

console.log('Today:', formattedDate);