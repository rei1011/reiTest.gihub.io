
const calcVertex = (x1,y1,x2,y2) => {
  const bigX1 = new BigDecimal("x1");
  const bigY1 = new BigDecimal("y1");
  const bigX2 = new BigDecimal("x2");
  const bigY2 = new BigDecimal("y2");
  const two = new BigDecimal("2");
  const three = new BigDecimal("3");
  let sX = new BigDecimal();
  let sY = new BigDecimal();
  let tX = new BigDecimal();
  let tY = new BigDecimal();
  let uX = new BigDecimal();
  let uY = new BigDecimal();

  sX = ((bigX2.subtract(bigX1)).divide(three,5)).add(bigX1);
  tX = bigX2.subtract((bigX2.subtract(bigX1)).divide(three,5));
  sY = ((bigY2.subtract(bigY1)).divide(three,5)).add(bigY1);
  tY = bigY2.subtract((bigY2.subtract(bigY1)).divide(three,5));
  uX = (((tX.subtract(sX)).multiply(Math.cos(Math.PI/3))).subtract((tY.subtract(sY)).multiply(Math.sin(Math.PI/3)))).add(sX);
  uY = (((tX.subtract(sX)).multiply(Math.sin(Math.PI/3))).subtract((tY.subtract(sY)).multiply(Math.cos(Math.PI/3)))).add(sY);
}