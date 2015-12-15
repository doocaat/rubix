import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import HorizontalForm from 'routes/forms/horizontalform';

var EmployeeTable = React.createClass ({
  mixins: [State, Navigation],
  componentDidMount() {
    $('#example')
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  },
  back: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/social');
  },
  render() {
    return (
      <Table id='example' className='display' cellSpacing='0' width='100%'  onClick={this.back}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Condition</th>
            <th>Acitivty Level</th>
            <th>Campaigns</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Name</td><td>Age</td><td>Gender</td><td>Condition</td><td>Activity Level</td><td>Campaigns</td><td>Points</td></tr>
          <tr><td>Curie, Marie </td><td>20</td><td>F</td><td>Pre-Hypertension </td><td>Active </td><td>5</td><td>1000</td></tr>
          <tr><td>Doe, Jane </td><td>30</td><td>F</td><td>Hypertension </td><td>Very Active </td><td>5</td><td>1000</td></tr>
          <tr><td>Doe, John </td><td>40</td><td>M</td><td>Pre-Diabetes </td><td>Sedentary</td><td>5</td><td>1000</td></tr>
          <tr><td>Einstein, Albert </td><td>50</td><td>M</td><td>Diabetes </td><td>Active </td><td>5</td><td>1000</td></tr>
          <tr><td>Goodall, Jane </td><td>60</td><td>F</td><td>Diabetic - Oral </td><td>Very Active</td><td>5</td><td>1000</td></tr>
          <tr><td>Smith, Jane </td><td>65</td><td>F</td><td>Diabetic - Insulin </td><td>Sedentary </td><td>5</td><td>1000</td></tr>
          <tr><td>Smith, John </td><td>70</td><td>M</td><td>Overweight </td><td>Active </td><td>5</td><td>1000</td></tr>
          <tr><td>Curie, Marie </td><td>20</td><td>F</td><td>Pre-Hypertension </td><td>Very Active </td><td>5</td><td>1000</td></tr>
          <tr><td>Doe, Jane</td><td>30</td><td>F</td><td>Hypertension </td><td>Sedentary </td><td>5</td><td>1000</td></tr>
          <tr><td>Doe, John </td><td>40</td><td>M</td><td>Pre-Diabetes</td><td>Active</td><td>5</td><td>1000</td></tr>
          <tr><td>Einstein, Albert</td><td>50</td><td>M</td><td>Diabetes</td><td>Very Active </td><td>5</td><td>1000</td></tr>
          <tr><td>Goodall, Jane</td><td>60</td><td>F</td><td>Diabetic - Oral</td><td>Sedentary </td><td>5</td><td>1000</td></tr>
          <tr><td>Smith, Jane</td><td>65</td><td>F</td><td>Diabetic - Insulin</td><td>Active</td><td>5</td><td>1000</td></tr>
        </tbody>
      </Table>
    )
  }
});


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
                    <Col sm={2}>
                      <Label>Gender</Label>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        Male
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Female
                      </Radio>
                    </Col>
                    <Col sm={2}>
                      <Label>Age range</Label>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        20-29 years old
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        30-39 years old
                      </Radio>
                      <Radio value='option3' defaultChecked name='horizontal-radio-options'>
                        40-49 years old
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        50-59 years old
                      </Radio>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        60-69 years old
                      </Radio>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        70+ years old
                      </Radio>
                    </Col>
                    <Col sm={2}>
                      <Label>Activity level</Label>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        Sedentary
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Active
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Very Active
                      </Radio>
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
                    <Col sm={3} style={{paddingRight: 0}}>
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
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <EmployeeTable />
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

