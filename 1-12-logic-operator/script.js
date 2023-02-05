const hasDriverLicense = true;

const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
  console.log('我可以开车了');
} else {
  console.log('还是让其他人来开吧');
}

const isTired = true;
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log('我可以开车了');
} else {
  console.log('还是让其他人来开吧');
}
