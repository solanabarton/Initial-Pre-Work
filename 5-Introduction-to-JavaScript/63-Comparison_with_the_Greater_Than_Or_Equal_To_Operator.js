//greater than or equal to
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  if (val >=9) {
    return "Less than 10"
  }

  if (val >=0) {
    return "Less than 10"
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(9);
