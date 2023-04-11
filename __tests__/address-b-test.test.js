import Contact from './../src/address-b-test.js';

describe('Contact', () => {

  test('should create new Contact Object with listed propertues', () => {
    const newContact = new Contact("ross", "davila", "559-3333", "73 n way", "ross@ya");
    expect(newContact.firstName).toEqual("ross");
    expect(newContact.lastName).toEqual("davila");
    expect(newContact.phoneNumber).toEqual("559-3333");
    expect(newContact.physicalAddress).toEqual("73 n way");
    expect(newContact.emailAddress).toEqual("ross@ya");
  });
});

  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.phoneNumber = phoneNumber;
  // this.physicalAddress = physicalAddress;
  // this.emailAddress = [personalEmail, workEmail];