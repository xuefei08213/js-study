let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas) {
  console.log('Dolphins is winner');
} else if (averageKoalas > averageDolphins) {
  console.log('Koalas is winner');
} else if (averageDolphins === averageKoalas) {
  console.log('they are draw');
}

averageDolphins = (97 + 112 + 102) / 3;
averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log('Dolphins is winner');
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log('Koalas is winner');
} else if (averageDolphins === averageKoalas) {
  console.log('they are draw');
}

averageDolphins = (97 + 112 + 102) / 3;
averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log('Dolphins is winner');
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log('Koalas is winner');
} else if (
  averageDolphins === averageKoalas &&
  averageKoalas > 100 &&
  averageDolphins >= 100
) {
  console.log('they are draw');
} else {
  console.log('no team wins the trophy');
}
