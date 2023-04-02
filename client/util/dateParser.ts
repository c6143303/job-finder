import {$MONTHS} from "./const";

export const dateParser = (date:Date) => {
  return `${$MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}