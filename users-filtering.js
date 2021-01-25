function filterUsers(originalCollection, criteria, acceptedValue) {
  if (!criteria || !acceptedValue) return originalCollection;

  if (criteria == 'name') {
    return originalCollection.filter(x => x.name === acceptedValue);
  }

  if (criteria == 'age') {
    return originalCollection.filter(x => x.age >= acceptedValue);
  }

  throw new Error('Unsupported filtering criteria.');
}