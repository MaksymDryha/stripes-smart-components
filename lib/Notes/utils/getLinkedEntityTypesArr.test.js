import getLinkedEntityTypesArr from './getLinkedEntityTypesArr';

const links = [
  {
    id: '1',
    type: 'provider',
  },
  {
    id: '2',
    type: 'resource',
  },
  {
    id: '3',
    type: 'package',
  },
  {
    id: '4',
    type: 'package',
  },
];

const expectedOutput = [
  { count: 1, type: 'provider' },
  { count: 1, type: 'resource' },
  { count: 2, type: 'package' },
];

describe('getLinkedEntityTypesArr', () => {
  it('should return correct linked entity types array', () => {
    expect(getLinkedEntityTypesArr(links)).toEqual(expectedOutput);
  });
});
