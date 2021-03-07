import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { Form } from '@core/store/ducks/forms/types'
import * as formActions from '@core/store/ducks/forms/actions'
import FormList from '@lead-management/pages/Forms/List'
import * as FormListSelectors from '@core/store/ducks/forms/selectors'

interface StateProps {
  activeForms: Form[],
  inactiveForms: Form[],
  loading: boolean,
  error: boolean,
  response: string
}

interface DispatchProps {
  requestList() : void
}

type Props = StateProps & DispatchProps 

class FormListContainers extends React.Component<Props> {
  componentDidMount() {
    const { requestList } = this.props
    requestList()
  }

  
  render() {
    const { activeForms, inactiveForms, requestList, loading, error } = this.props
    return (
        <FormList 
          activeForms={activeForms}
          inactiveForms={inactiveForms}
          requestList={requestList}
          loading={loading}
          error={error}
        />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.forms.error,
  loading: state.forms.loading,
  response: state.forms.response,
  activeForms: FormListSelectors.activeForms(state),
  inactiveForms: FormListSelectors.inactiveForms(state),

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(formActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormListContainers);
