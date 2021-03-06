import React from 'react';
import PropTypes from 'prop-types';
import { MetaSection } from '@folio/stripes-components';

class ViewMetaData extends React.Component {
  static manifest = Object.freeze({
    createdBy: {
      type: 'okapi',
      records: 'users',
      path: 'users?query=(id==!{metadata.createdByUserId})',
    },
    updatedBy: {
      type: 'okapi',
      records: 'users',
      path: 'users?query=(id==!{metadata.updatedByUserId})',
    },
  });

  static propTypes = {
    metadata: PropTypes.object,
    resources: PropTypes.shape({
      createdBy: PropTypes.shape({
        records: PropTypes.arrayOf(PropTypes.object),
      }),
      updatedBy: PropTypes.shape({
        records: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
  };

  static defaultProps = {
    metadata: {},
  }

  render() {
    const { metadata, resources: { createdBy, updatedBy } } = this.props;

    return (createdBy && createdBy.hasLoaded && updatedBy && updatedBy.hasLoaded) ?
      <MetaSection
        id="instanceRecordMeta"
        contentId="instanceRecordMetaContent"
        lastUpdatedDate={metadata.updatedDate}
        createdDate={metadata.createdDate}
        lastUpdatedBy={updatedBy.records[0]}
        createdBy={createdBy.records[0]}
      />
      :
      <div />;
  }
}

export default ViewMetaData;
