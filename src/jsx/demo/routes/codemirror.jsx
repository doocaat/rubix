import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import HorizontalForm from 'routes/forms/horizontalform';
import ProgressBar from 'routes/tables/progressbar';


class CalendarInput extends React.Component {
  componentDidMount() {
    $(this.refs.datetimepicker1.getDOMNode()).datetimepicker({
      widgetParent: '#'+this.props.id
    }).hide();
  }
  render() {
    return (
      <PanelContainer controlStyles='bg-brown50 fg-white'>
        <Panel horizontal className='force-collapse'>
          <PanelBody className='panel-sm-7' style={{padding: 0}}>
            <InputGroup className='date' ref='datetimepicker1'>
              <Input type='text' className='form-control' />
              <InputGroupAddon>
                <Icon glyph='icon-fontello-calendar' />
              </InputGroupAddon>
            </InputGroup>
            <div>
            <div id={this.props.id} className='datetimepicker-inline'></div>
            </div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}


class CampaignTable extends React.Component {
//  componentDidMount() {
//    $('#example')
//      .addClass('nowrap')
//      .dataTable({
//        responsive: true,
//        columnDefs: [
//          { targets: [-1, -3], className: 'dt-body-right' }
//        ]
//    });
//  }
  render() {
    return (
        <Table id='example' className='display' cellSpacing='0' width='100%'>
          <thead>
            <tr>
              <th>Campaign</th><th>Condition</th><th>Duration</th><th>Participants</th><th>Points</th><th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Walking challenge </td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016 </td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Continuous reading - Blood pressure</td><td>Hypertension</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016 </td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Thousand steps</td><td>Obese</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Continuous reading - Blood glucose</td><td>Diabetic</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Step Out challenge</td><td>All Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps</td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016 </td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps </td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps</td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016 </td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps </td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps</td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps</td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016 </td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
            <tr><td>Ten thousand steps</td><td>Overweight</td><td style={{textAlign: 'left'}}>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td><td><ProgressBar /></td></tr>
          </tbody>
        </Table>
    )
  }
}

class SearchForm extends React.Component {
render() {
  return (
    <Panel>
        <PanelHeader className='bg-darkblue fg-white'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h3>Search</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Form>                            
                  <FormGroup>
										<Row style={{display: 'flex', alignItems: 'flex-end', width: '100%'}}>
											<Col sm={2}>
												<Label htmlFor='multiselect' >Status</Label>
											</Col>
											<Col sm={6} >
												<Label style={{textAlign: 'center'}}>Select a date range</Label>
											</Col>
											<Col sm={2} >
												<Label >Condition(s)</Label>
											</Col>
											<Col sm={2} style={{paddingRight: 0}}>
												<Button lg bsStyle='primary'>Create campaign</Button>{' '}
											</Col>
										</Row>

										<Row>
											<Col sm={2}>
												<Checkbox value='option1' name='horizontal-checkbox-options'>
													Upcoming
												</Checkbox>
												<Checkbox value='option2' defaultChecked name='horizontal-checkbox-options'>
													Running
												</Checkbox>
												<Checkbox value='option3' disabled name='horizontal-checkbox-options'>
													Finished
												</Checkbox>
											</Col>
											<Col sm={6} >
												<div style={{display: 'flex', marginTop: '-9px'}}>
													<CalendarInput id="datetimepicker1-parent" />
													<CalendarInput id="datetimepicker2-parent" />
												</div>
											</Col>
											<Col sm={2} style={{padding: 0}}>
												<Checkbox value='option1' name='horizontal-checkbox-options'>
													Pre-Hypertension
												</Checkbox>
												<Checkbox value='option2' defaultChecked name='horizontal-checkbox-options'>
													Hypertension
												</Checkbox>
												<Checkbox value='option3' disabled name='horizontal-checkbox-options'>
													Pre-Diabetic
												</Checkbox>
												<Checkbox value='option1' name='horizontal-checkbox-options'>
													Diabetic
												</Checkbox>
											</Col>
											<Col sm={2} style={{paddingRight: 0}}>
												<Checkbox value='option1' name='horizontal-checkbox-options'>
													Diabetic - Oral medication
												</Checkbox>
												<Checkbox value='option2' defaultChecked name='horizontal-checkbox-options'>
													Diabetic - Insulin injection
												</Checkbox>
												<Checkbox value='option3' disabled name='horizontal-checkbox-options'>
													Overweight
												</Checkbox>
												<Checkbox value='option1' name='horizontal-checkbox-options'>
													Obese
												</Checkbox>
											</Col>
											<hr/>
										</Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <CampaignTable />
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        <PanelFooter className='bg-blue text-right'>
          <Grid>
            <Row>
              <Col xs={12}>
                <br/>
                <div>
                  <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                  <Button outlined bsStyle='lightblue'>submit</Button>
                </div>
                <br/>
              </Col>
            </Row>
          </Grid>
        </PanelFooter>
      </Panel>
  )
}
}
class Body extends React.Component {
  onChange() {
    console.log('onChange');
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12} collapseRight>
              <PanelContainer noOverflow controlStyles='bg-green fg-white'>
                <SearchForm />
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}

