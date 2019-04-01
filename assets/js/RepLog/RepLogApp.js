import React, {Component} from 'react';
import RepLogs from './RepLogs';
import PropTypes from 'prop-types';

export default class RepLoggApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
        };

        this.handleRowClick = this.handleRowClick.bind(this);
    }
    handleRowClick(repLogId) {
        this.setState({highlightedRowId: repLogId});
    }

    render() {
        const { highlightedRowId } = this.state;
        const { withHeart } = this.props;

        return (
            <RepLogs
                withHeart={withHeart}
                highlightedRowId={highlightedRowId}
                onRowClick={this.handleRowClick}
             />
        )

    }

}

RepLogs.PropTypes = {
  withHeart: PropTypes.bool
};

