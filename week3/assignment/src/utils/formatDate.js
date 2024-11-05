const formatDate = () => {
  const now = new Date();

  const padZero = (num) => String(num).padStart(2, '0');

  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);
  const day = padZero(now.getDate());

  const hours = now.getHours();
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  const period = hours < 12 ? '오전' : '오후';
  const formattedHours = padZero(hours % 12 || 12);

  return `${year}. ${month}. ${day}. ${period} ${formattedHours}:${minutes}:${seconds}`;
};

export default formatDate;
