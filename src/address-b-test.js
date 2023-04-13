export default function Contact(firstName, lastName, phoneNumber, physicalAddress, personalEmail, workEmail) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.physicalAddress = physicalAddress;
  this.emailAddress = [personalEmail, workEmail]
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
