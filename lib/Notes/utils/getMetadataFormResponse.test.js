import getMetadataFormResponse from './getMetadataFormResponse';

const responseMetadata = {
  createdDate: 'may 1',
  createdByUsername: 'max',
  updatedDate: 'may 2',
  updatedByUserId: 'x1kDsk2'
};

const expectedOutput = {
  createdDate: 'may 1',
  createdBy: 'max',
  lastUpdatedDate: 'may 2',
  lastUpdatedBy: 'x1kDsk2'
};

describe('getMetadataFormResponse', () => {
  it('should return correct metadata props', () => {
    expect(getMetadataFormResponse(responseMetadata)).toEqual(expectedOutput);
  });
});
