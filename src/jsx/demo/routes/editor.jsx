import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import ProgressBar from 'routes/tables/progressbar';

class RewardAvailable extends React.Component {
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
            <tr><th>Category</th><th>Name</th><th>Duration</th><th>Value</th><th>Points</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>Gift card</td><td>Best Buy</td><td>01/01/2016 - 02/02/2016</td><td>50</td><td>5000</td><td>HTML is the best thing since sliced bread ...</td></tr>
            <tr><td>Credits</td><td>American</td><td>01/01/2016 - 02/02/2016 </td><td>250</td><td>25000</td><td>HTML is the best thing since sliced bread ...</td></tr>
            <tr><td>Subscriptions</td><td>Airlines</td><td>01/01/2016 - 02/02/2016 </td><td>25</td><td>2500</td><td>HTML is the best thing since sliced bread ...</td></tr>
            <tr><td>Reimbursement</td><td>Netflix</td><td>01/01/2016 - 02/02/2016 </td><td>250</td><td>10000</td><td>HTML is the best thing since sliced bread ...</td></tr>
            <tr><td>Cash</td><td>Dental</td><td>01/01/2016 - 02/02/2016</td><td>100</td><td>10000</td><td>HTML is the best thing since sliced bread ...</td></tr>
          </tbody>
        </Table>
    )
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
              <PanelContainer>
                <Panel>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                    <Row style={{textAlign: 'right', padding: 20}}>
                        <Button lg style={{marginBottom: 5}} bsStyle='primary'>Create reward</Button>{' '}
                      </Row>
                      <Row>
                        <Col xs={12}>
                        <Label>REWARDS</Label>
                        <RewardAvailable />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                        <Label>PENDING CLAIMS</Label>
                        <RewardClaims />
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
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
