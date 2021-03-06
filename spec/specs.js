describe("Contact", function(){
  it("creates a new contact with the given properties", function(){
    var testContact = new Contact("Dave","Smith");
    expect(testContact.firstName).to.equal("Dave");
    expect(testContact.lastName).to.equal("Smith");
    expect(testContact.addressData).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});
