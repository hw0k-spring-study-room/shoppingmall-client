import { connect } from 'react-redux';

import Counter from '~/components/Counter';
import { actions as counterActions } from '~/modules/counter';

const mapStateToProps = state => ({
  number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
  increment: payload => dispatch(counterActions.increment(payload)),
  decrement: payload => dispatch(counterActions.decrement(payload)),
  incrementAsync: payload => dispatch(counterActions.incrementAsync(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
