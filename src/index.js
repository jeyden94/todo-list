import "./styles.css";
import { storeLocally, Task } from "./tasks.js"
import { formattedDate } from "./dates.js"

const task1 = new Task("Make Dinner", "cook spaghetti for dinner", 2, formattedDate, "Personal");

console.log(task1)

storeLocally(task1)
