import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class AlertsTable extends React.Component {
  componentDidMount() {
    $('#example')
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  }
  render() {
    return (  
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4 style={{marginTop: 0}}>ALERTS</h4>
                  <Table id='example' className='display' cellSpacing='0' width='100%'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Condition(s)</th>
                        <th>Reading</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#FCDB56'}}></div></td><td>Curie, Marie </td><td>Pre-Hypertension</td><td style={{textAlign: 'left'}}>Low blood pressure </td><td>90/60 mmHg</td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Einstein, Albert </td><td>Diabetic</td><td  style={{textAlign: 'left'}}>Highblood glucose</td><td>180 mg/dL </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure</td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#FCDB56'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg</td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#FCDB56'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane</td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#FCDB56'}}></div></td><td>Goodall, Jane</td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg</td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure</td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#FCDB56'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure</td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane </td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg</td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#E34646'}}></div></td><td>Goodall, Jane</td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure </td><td>140/90 mmHg </td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                      <tr><td><div style={{width: 25, height: 25, borderRadius: '5px', backgroundColor: '#FCDB56'}}></div></td><td>Goodall, Jane</td><td>Overweight</td><td  style={{textAlign: 'left'}}>Highblood pressure</td><td>140/90 mmHg</td><td><Button sm style={{marginBottom: 5}} bsStyle='primary'>Message</Button></td></tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
class RewardClaims extends React.Component {
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
            <tr><th>Name</th><th>Campaign</th><th>Duration</th><th>Condition</th><th>Points</th><th>Status</th></tr>
          </thead>
          <tbody>
<tr><td>Name</td><td>Campaign</td><td>Duration</td><td>Condition</td><td>Points</td><td>Status</td></tr>
<tr><td>Curie, Marie</td><td>Walking challenge</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}}>Not approved</Button><Button sm style={{marginBottom: 5}}>Pending</Button></td></tr>
<tr><td>Curie, Marie</td><td>Continuous reading - Blood pressure</td><td>01/01/2016 - 02/02/2016</td><td>Hypertension</td><td>1000</td><td><Button sm style={{marginBottom: 5}}>Approved</Button><Button sm style={{marginBottom: 5}} bsStyle='warning'>Not approved</Button><Button sm style={{marginBottom: 5}}>Pending</Button></td></tr>
<tr><td>Doe, Jane</td><td>Thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Obese</td><td>1000</td><td><Button sm style={{marginBottom: 5}} >Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} bsStyle='info'>Pending</Button></td></tr>
<tr><td>Doe, Jane</td><td>Continuous reading - Blood glucose</td><td>01/01/2016 - 02/02/2016</td><td>Diabetic</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Doe, John</td><td>Step Out challenge</td><td>01/01/2016 - 02/02/2016</td><td>All Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Doe, John</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Einstein, Albert</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Einstein, Albert</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Goodall, Jane</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Goodall, Jane</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Smith, Jane</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
<tr><td>Smith, Jane</td><td>Ten thousand steps</td><td>01/01/2016 - 02/02/2016</td><td>Overweight</td><td>1000</td><td><Button sm style={{marginBottom: 5}} bsStyle='success'>Approved</Button><Button sm style={{marginBottom: 5}} >Not approved</Button><Button sm style={{marginBottom: 5}} >Pending</Button></td></tr>
          </tbody>
        </Table>
    )
  }
}


class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <AlertsTable />
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
