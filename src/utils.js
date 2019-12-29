export const formateDate = timeStamp => {
  let date = new Date(timeStamp);
  return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
};
