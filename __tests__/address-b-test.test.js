import Contact from './../src/address-b-test.js';

describe('Contact', () => {
  // let contact;
  // BeforeEach(( => {

  // })

  test('should create new Contact Object with listed properties, and split home and work emails', () => {
    const newContact = new Contact("ross", "davila", "559-3333", "73 n way", "ross@ya", "ross@gm");
    expect(newContact.firstName).toEqual("ross");
    expect(newContact.lastName).toEqual("davila");
    expect(newContact.phoneNumber).toEqual("559-3333");
    expect(newContact.physicalAddress).toEqual("73 n way");
    expect(newContact.emailAddress).toEqual(["ross@ya", "ross@gm"]);
  });


  test("should combine first name with last name", () => {
    const newContact = new Contact("ross", "davila", "559-3333", "73 n way", "ross@ya", "ross@gm");
    // const newFullName = new Contact("ross", "davila");
  newContact.fullName();
  // expect(newFullName.prototype.fullName(firstName + " " + lastName)).toEqual("ross johnson");
  // });
    expect(newContact.fullName()).toEqual("ross davila");
    });
  }); 

