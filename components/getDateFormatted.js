export const GetDateFormatted = (date) => {
  const commentdate = new Date(date);
  const day = commentdate.getDate();
  const month = commentdate.getMonth();
  const hours = commentdate.getHours();
  const year = commentdate.getFullYear();

  return `${year}년 ${month}월 ${day}일 ${hours}시`;
};
