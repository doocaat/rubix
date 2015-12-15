import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  back: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/dashboard');
  },
  componentDidMount: function() {
    $('html').addClass('authentication');
  },
  componentWillUnmount: function() {
    $('html').removeClass('authentication');
  },
  render: function() {
    return (
      <Container id='auth-container' style={{zIndex: 10000000}}>

      <NavHeader {...this.props}>
        <NavBrand tabIndex='-1' href='http://www.mypoindexter.com/' target="_blank">
          <div style={{backgroundColor: '#F1F1F1', borderRadius: 5, padding: 10}}>
            <img src='/imgs/APH-Logo-blue.png' alt='rubix' />
          </div>
        </NavBrand>
      </NavHeader>

        <Container id='auth-row' style={{marginTop: 200}}>
          <Container id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={12}>
                  <PanelContainer >
                    <Panel>
                      <PanelBody style={{padding: 0}}>
                        <div className='bg-hoverblue fg-black50 text-center' style={{padding: 80}}>
                          <img src='/imgs/Walmart_logo.png' alt='rubix' width='auto' height='80' />
                        </div>
                        <div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form onSubmit={this.back}>
                              <FormGroup>
                                <InputGroup lg>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroupAddon>
                                  <Input autoFocus type='email' id='emailaddress' className='border-focus-blue' placeholder='Username' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup lg>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroupAddon>
                                  <Input type='password' id='password' className='border-focus-blue' placeholder='Password' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight style={{paddingTop: 10}}>
                                      <Link to='/app/dashboard'>Forgot your password?</Link>
                                    </Col>
                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                      <Button outlined lg type='submit' bsStyle='blue' onClick={this.back}>Login</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                        </div>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
          </Container>
        </Container>
      </Container>
    );
  }
});

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
