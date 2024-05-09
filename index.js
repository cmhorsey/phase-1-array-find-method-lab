// code your solution here
function superbowlWin(record) {
  const isWin = record.find(item => item.result === "W");
  return isWin ? isWin.year : undefined;
};
