import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

import { Creators as errorActions } from '../../store/ducks/error';

import closeIcon from '../../assets/images/close.svg';

const ErrorBox = ({ error: { message, isVisible }, hideError }) => isVisible && (
<Container>
  <p>{message}</p>
  <button type="button" onClick={hideError}>
    <img src={closeIcon} alt="Fechar" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    isVisible: PropTypes.bool,
  }).isRequired,
  hideError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(errorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
