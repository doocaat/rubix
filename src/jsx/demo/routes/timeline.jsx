import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import LoremIpsum from 'global/jsx/loremipsum';
import ProgressBar from 'routes/tables/progressbar';

// extra graphs

class Chart extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class TrendsPanel extends React.Component {
render() {
    var TrendsGraphTemplate = (n) => <TrendsGraph id={this.props.id} title={this.props.title} series1={this.props.series1} series2={this.props.series2} low={this.props.low } high={this.props.high } n={n}/>
    return (
        <PanelContainer controlStyles='bg-purple fg-white'>
            <Panel>
              <PanelHeader className='bg-purple fg-white tabs'>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h4>{this.props.label}</h4>
                    </Col>
                  </Row>
                </Grid>
                <TabContainer id='tab-2' className='plain'>
                  <TabList>
                    <Tab active>
                      7 days
                    </Tab>
                    <Tab>
                      3 months
                    </Tab>
                    <Tab>
                      6 months
                    </Tab>
                    <Tab>
                      9 months
                    </Tab>
                  </TabList>
                </TabContainer>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <TabContent tabContainerID='tab-2'>
                        <TabPane>
                          {TrendsGraphTemplate(7)}
                        </TabPane>
                        <TabPane>
                          {TrendsGraphTemplate(30)}
                        </TabPane>
                        <TabPane>
                          {TrendsGraphTemplate(180)}
                        </TabPane>
                        <TabPane>
                          {TrendsGraphTemplate(270)}
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
    )
  }
}

class TrendsGraph extends React.Component {
componentDidMount() {
    (() => {
      var chart = new Rubix('#'+this.props.id, {
        height: 300,
        title: this.props.title,
        tooltip: {
          color: '#ECC279',
          format: {
            x: '.0f',
            y: '.0f'
          }
        },
        show_markers: true
      });

      var data = [];
      for(var i = 0; i < this.props.n; i++) {
        data.push({x: i+1, y: this.props.low+Math.round(Math.random()*(this.props.high-this.props.low)/2)});
      };
      
      var line2 = chart.line_series({
        name: 'Low',
        color: '#426F9F',
        marker: 'square'
      });

      var data2 = [];

      for(var i=0; i < data.length; i++) {
        data2.push({
          x: data[i].x,
          y: data[i].y+5
        });
      }

      line2.addData(data2);

      var data3 = [];

      for(var i=0; i < data2.length; i++) {
        data3.push({
          x: data2[i].x,
          y: this.props.high-Math.round(Math.random()*(this.props.high-this.props.low)/2)
        });
      }
      
      var line4 = chart.line_series({
        name: 'High',
        color: '#ECC279',
        marker: 'triangle-up'
      });

      var data4 = [];

      for(var i=0; i < data3.length; i++) {
        data4.push({
          x: data3[i].x,
          y: data3[i].y+Math.round((Math.random() * 10) + 2.5)
        });
      }

      line4.addData(data4);
    })();

}
  render() {
    return (
    <div>
      <Chart id={this.props.id} />
    </div>
    )
  }
}

class UserInformationPanel2 extends React.Component {
  render() {
    return (  
      <Col sm={12}>
        <Row>
         <TrendsPanel id='bpTrend' label="Blood Pressure" title="Blood Pressure over Time" series1='Low' series2='High' low={70} high={170} />
        </Row>
        <Row>
         <TrendsPanel id='bgTrend' label="Blood Glucose" title="Blood Glucose over Time" series1='Before meal' series2='After meal' low={40} high={150} />
        </Row>
      </Col>
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
                    <Col sm={1}>
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
                    <Col sm={2}>
                      <Label>Device</Label>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        Blood pressure
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Blood glucose
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Weight scale
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Activity tracker
                      </Radio>
                    </Col>
                    <Col sm={2} style={{padding: 0}}>
                      <Label>Age range</Label>
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
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12} collapseRight>
              <PanelContainer noOverflow controlStyles='bg-green fg-white'>
                <SearchForm />
              </PanelContainer>
              <UserInformationPanel2 />
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
