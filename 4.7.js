function isLeapYear(year) {
  let leap = false
  if(year%4 == 0){
    leap = true
  };
  if(year%4 == 0 && year%100 == 0){
    leap = false
  };
  if(year%4 == 0 && year%100 == 0 && year%400 == 0){
    leap = true
  }
  return leap
}
