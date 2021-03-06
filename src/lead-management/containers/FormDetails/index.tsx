import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import FormDetailsView from '@lead-management/pages/Forms/Read'
import { Form } from '@core/store/ducks/forms/types'
import * as formActions from '@core/store/ducks/forms/actions'
import { RouteProp } from '@react-navigation/native';

interface StateProps {
  form: Form | null,
  loading: boolean,
  error: boolean,
  response: string
}

type ScreenRouteProps = {
  Form: { id: string }
}

interface DispatchProps {
  get(id: string): void,
  route: RouteProp<ScreenRouteProps, "Form">,
  active(id:string): void,
  inactivate(id: string): void
}

type Props = StateProps & DispatchProps 

class FormDetailsContainer extends React.Component<Props> {
  componentDidMount() {
    const { get, route } = this.props
    const { id } = route.params
    get(id)
  }
  render() {
    const { form, loading, error, response, get, active, inactivate } = this.props
    return (
      <FormDetailsView
        form={form}
        loading={loading}
        error={error}
        response={response}
        getForm={get}
        enable={active}
        disable={inactivate}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.forms.error,
  loading: state.forms.loading,
  form: state.forms.form,
  response: state.forms.response
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(formActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormDetailsContainer);
