var assert = require('assert');

const original = [
  {
    name: 'Jack Doe',
    age: 35,
    location: 'Lviv'
  },
  {
    name: 'Mike Pence',
    age: 60,
    location: 'Washington, DC'
  }
]

describe('users-filtering', function() {
  describe('filter by age', function() {
    it('should return users of age specified or older', function() {
      // arrange
      
      // act
      const filtered = filterUsers(original, 'age', 50);

      // assert
      assert.strictEqual(filtered.length, 1);
    });

    it('should return all when the age is not specified', function() {
      // arrange
      
      // act
      const filtered = filterUsers(original, 'age');

      // assert
      assert.strictEqual(filtered.length, 2);
    });

    it('should throw if criteria is not supported', function() {
      // arrange
      
      // act
      const filtered = filterUsers(original, 'location', 'CA');

      // assert
      assert.throws('Unsupported filtering criteria.');
    });
  });
});