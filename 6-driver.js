const hasLicence  = true;
const age = 21;
const isDrunk = true;
 
const canDrive = (hasLicence && age >= 18 && !isDrunk) ? 'может' : 'не может';
console.log(canDrive);