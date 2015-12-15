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

class RadarChartPanel extends React.Component {
  componentDidMount() {
    var data = {
      labels: ['Weight', 'Blood Pressure', 'Blood Glucose', 'Sleep', 'Activity', 'Diet', 'Rest'],
      datasets: [{
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: 'My Second dataset',
        fillColor: 'rgba(234, 120, 130, 0.5)',
        strokeColor: 'rgba(234, 120, 130, 1)',
        pointColor: 'rgba(234, 120, 130, 1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }]
    };

    var ctx = document.getElementById('chartjs-1').getContext('2d');
    new Chart(ctx).Radar(data, {
      responsive: false,
      maintainAspectRatio: true
    });

    $('.line-EA7882').sparkline('html', { type: 'line', height: 25, lineColor: '#EA7882', fillColor: 'rgba(234, 120, 130, 0.5)' });
    $('.line-2EB398').sparkline('html', { type: 'line', height: 25, lineColor: '#2EB398', fillColor: 'rgba(46, 179, 152, 0.5)' });
    $('.line-79B0EC').sparkline('html', { type: 'line', height: 25, lineColor: '#79B0EC', fillColor: 'rgba(121, 176, 236, 0.5)' });
    $('.line-FFC497').sparkline('html', { type: 'line', height: 25, lineColor: '#FFC497', fillColor: 'rgba(255, 196, 151, 0.5)' });
  }
  render() {
    return (
      <canvas id='chartjs-1' height='250' width='250'></canvas>
    );
  }
}


class TicketsPanel extends React.Component {
  componentDidMount() {
    var ticketsCleared = Rubix.Donut('#tickets-cleared', {
      title: 'Health risks',
//      subtitle: 'by agents',
      titleColor: '#EBA068',
//      subtitleColor: '#EBA068',
      hideLegend: true,
      height: 300,
      tooltip: {
        color: '#EBA068'
      }
    });

    ticketsCleared.addData([
      { 
        name: 'Normal',
        value: 25,
        color: '#FA824F'
      },
      {
        name: 'Pre-Hypertension',
        value: 15,
        color: '#EBA068'
      },
      {
        name: 'Hypertension',
        value: 10,
        color: '#FFC497'
      },
      {
        name: 'Pre-Diabetes',
        value: 20,
        color: '#FFC9A0'
      },
      {
        name: 'Diabetes',
        value: 10,
        color: '#FFC9A0'
      },
      {
        name: 'Overweight',
        value: 10,
        color: '#FFD3B1'
      },
      {
        name: 'Obese',
        value: 10,
        color: '#FFD3B1'
      }
    ]);
  }
  render() {
/*
      <div>
        <Table collapsed>
          <tbody>
            <tr>
              <td style={{padding: '12.5px 25px'}}>
                <Progress collapseBottom withLabel='Karl Pohl' value={57} color='#FA824F' min={0} max={100} />
              </td>
              <td style={{padding: '12.5px 25px'}} className='text-right'>
                <BLabel>57</BLabel>
              </td>
            </tr>
            <tr>
              <td style={{padding: '12.5px 25px'}}>
                <Progress collapseBottom withLabel='Gamze Erdoğan' value={35} color='#EBA068' min={0} max={100} />
              </td>
              <td style={{padding: '12.5px 25px'}} className='text-right'>
                <BLabel>33</BLabel>
              </td>
            </tr>
            <tr>
              <td style={{padding: '12.5px 25px'}}>
                <Progress collapseBottom withLabel='Leyla Cəlilli' value={30} color='#FFC497' fgColor='#B86A2D' min={0} max={100} />
              </td>
              <td style={{padding: '12.5px 25px'}} className='text-right'>
                <BLabel>23</BLabel>
              </td>
            </tr>
            <tr>
              <td style={{padding: '12.5px 25px'}}>
                <Progress collapseBottom withLabel='Nadir Üzeyirzadə' value={41} color='#FFC9A0' fgColor='#B86A2D' min={0} max={100} />
              </td>
              <td style={{padding: '12.5px 25px'}} className='text-right'>
                <BLabel>11</BLabel>
              </td>
            </tr>
            <tr>
              <td style={{padding: '12.5px 25px'}}>
                <Progress collapseBottom withLabel='Anna Sanchez' value={66} color='#FFD3B1' fgColor='#B86A2D' min={0} max={100} />
              </td>
              <td style={{padding: '12.5px 25px'}} className='text-right'>
                <BLabel>7</BLabel>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
*/
    return (
        <div id='tickets-cleared'></div>
    );
  }
}


// components
class NotesPanel extends React.Component {
  componentDidMount() {
    $('#trumbowyg-demo').trumbowyg({
      mobile: false,
      tablet: false,
      autogrow: true,
      dir: $('html').attr('dir')
    }).trumbowyg('html', '<p>2015-01-01</p><blockquote><p style="margin-bottom: 12.5px;"><span style="font-size: 11pt; line-height: 1.78571;">Started a work out routine&nbsp;</span><br></p><div></div></blockquote><p>New BP device recommended.</p>');
  }
  render() {
    return (
      <Panel>
        <PanelHeader>
          <Grid>
            <Row>
              <Col xs={12}>
                <h3 className='text-center'>Notes</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <div id='trumbowyg-demo'></div>
        </PanelBody>
      </Panel>
    );
  }
}

class UserInformationBackground extends React.Component {
  render() {
    return ( 
      <PanelContainer controlStyles='bg-blue fg-white'>
        <Panel>
          <PanelHeader className='bg-blue'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                <h3>Age: 35</h3>
                  <h6>Female</h6>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <p>
                    <table style={{width: '90%'}}>
                      <tr><td>Date of birth:</td><td style={{textAlign: 'right'}}>01/01/1980 </td></tr>
                      <tr><td>Weight: </td><td style={{textAlign: 'right'}}>180 lbs</td></tr>
                      <tr><td>Height: </td><td style={{textAlign: 'right'}}>5’7 feet </td></tr>
                      <tr><td>Activity status: </td><td style={{textAlign: 'right'}}>Sedentary</td></tr>
                    </table>
                  </p>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-lightblue'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h3>Hypertension, Pre-Diabetes, Overweight</h3>
                  <h6>Medical conditions</h6>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    )
  }
}
    
    
class UserInformationBaseline extends React.Component {
  render() {
    return (
      <PanelContainer controlStyles='bg-palepink fg-white'>
          <Panel>
            <PanelHeader className='bg-palepink'>
              <Grid>
                <Row>
                  <Col xs={12} className='fg-white'>
                    <h4>Baseline</h4>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <TabContent tabContainerID='tab-4'>
                      <TabPane>
                        <Grid>
                          <table style={{width: '90%'}}>
                            <tr><td>Blood pressure</td><td style={{textAlign: 'right'}}>110 / 80 mmHg </td></tr>
                            <tr><td>Blood glucose </td></tr>
                            <tr><td style={{paddingLeft: 20}}>Before meal </td><td style={{textAlign: 'right'}}>100 mg/dL</td></tr>
                            <tr><td style={{paddingLeft: 20}}>After meal </td><td style={{textAlign: 'right'}}>160 mg/dL</td></tr>
                            <tr><td>Weight goal </td><td style={{textAlign: 'right'}}>180 lbs </td></tr>
                            <tr><td>Activity tracker </td><td style={{textAlign: 'right'}}>10,000/day</td></tr>
                          </table>
                        </Grid>
                      </TabPane>
                      <TabPane>
                        <Grid>
                          <Col xs={12}>
                            <RadarChartPanel />
                          </Col>
                        </Grid>
                      </TabPane>
                      <TabPane>
                      <Grid>
                      < TicketsPanel/ >
                        </Grid>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
            <PanelFooter className='bg-palepink fg-white tabs'>
              <TabContainer id='tab-4' className='plain'>
                <TabList>
                  <Tab active>
                    <Icon bundle='fontello' glyph='home'/>
                  </Tab>
                  <Tab>
                    <Icon bundle='fontello' glyph='user'/>
                  </Tab>
                  <Tab>
                    <Icon bundle='fontello' glyph='cog'/>
                  </Tab>
                </TabList>
              </TabContainer>
            </PanelFooter>
          </Panel>
        </PanelContainer>
    )
  }
}
    
    
class UserInformationCampaigns extends React.Component {
  render() {
    return (
      <PanelContainer controlStyles='bg-green fg-white'>
        <Panel>
          <PanelHeader className='bg-green'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>Points: 2,500</h4>
                  <h6>from 9 campaigns</h6>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                    <table style={{width: '90%'}}>
                      <tr><td>Campaigns </td></tr>
                      <tr><td style={{paddingLeft: 20}}>Active </td><td style={{textAlign: 'right'}}>3</td></tr>
                      <tr><td style={{paddingLeft: 20}}>Complete </td><td style={{textAlign: 'right'}}>6</td></tr>
                      <tr><td>Rewards </td></tr>
                      <tr><td style={{paddingLeft: 20}}>Pending </td><td style={{textAlign: 'right'}}>2</td></tr>
                    </table>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    )
  }
}
    
class UserInformationPanel1 extends React.Component {
  render() {
    return (
      <div>
        <Col sm={6} smCollapseRight>
          <UserInformationBackground />
          <UserInformationBaseline />
        </Col>
        <Col sm={6} smCollapseRight>
          <UserInformationCampaigns />
           <PanelContainer>
              <Panel>
                <PanelBody style={{padding: 0}}>
                  <NotesPanel />
                </PanelBody>
              </Panel>
            </PanelContainer>
        </Col>
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
    
class UserInformationPanel3 extends React.Component {
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
    
class UserInformationPanel4 extends React.Component {
  render() {
    return (  
            <PanelContainer controlStyles='bg-blue fg-white'>
              <Panel>
                <PanelHeader className='bg-blue'>
                  <Grid>
                    <Row>
                      <Col xs={12} className='fg-white'>
                      <h3>Age: 35</h3>
                        <h6>Female</h6>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <p>
                          <table style={{width: '90%'}}>
                            <tr><td>Date of birth:</td><td style={{textAlign: 'right'}}>01/01/1980 </td></tr>
                            <tr><td>Weight: </td><td style={{textAlign: 'right'}}>180 lbs</td></tr>
                            <tr><td>Height: </td><td style={{textAlign: 'right'}}>5’7 feet </td></tr>
                            <tr><td>Activity status: </td><td style={{textAlign: 'right'}}>Sedentary</td></tr>
                          </table>
                        </p>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
                <PanelFooter className='bg-lightblue'>
                  <Grid>
                    <Row>
                      <Col xs={12} className='fg-white'>
                        <h3>Hypertension, Pre-Diabetes, Overweight</h3>
                        <h6>Medical conditions</h6>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
              </Panel>
            </PanelContainer>
    )
  }
}
    
class UserInformationPanel5 extends React.Component {
  render() {
    return (  
      <PanelContainer controlStyles='bg-palepink fg-white'>
          <Panel>
            <PanelHeader className='bg-palepink'>
              <Grid>
                <Row>
                  <Col xs={12} className='fg-white'>
                    <h4>Baseline</h4>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <TabContent tabContainerID='tab-4'>
                      <TabPane>
                        <Grid>
                          <table style={{width: '90%'}}>
                            <tr><td>Blood pressure</td><td style={{textAlign: 'right'}}>110 / 80 mmHg </td></tr>
                            <tr><td>Blood glucose </td></tr>
                            <tr><td style={{paddingLeft: 20}}>Before meal </td><td style={{textAlign: 'right'}}>100 mg/dL</td></tr>
                            <tr><td style={{paddingLeft: 20}}>After meal </td><td style={{textAlign: 'right'}}>160 mg/dL</td></tr>
                            <tr><td>Weight goal </td><td style={{textAlign: 'right'}}>180 lbs </td></tr>
                            <tr><td>Activity tracker </td><td style={{textAlign: 'right'}}>10,000/day</td></tr>
                          </table>
                        </Grid>
                      </TabPane>
                      <TabPane>
                        <Grid>
                          <Col xs={12}>
                            <RadarChartPanel />
                          </Col>
                        </Grid>
                      </TabPane>
                      <TabPane>
                      <Grid>
                      < TicketsPanel/ >
                        </Grid>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
            <PanelFooter className='bg-palepink fg-white tabs'>
              <TabContainer id='tab-4' className='plain'>
                <TabList>
                  <Tab active>
                    <Icon bundle='fontello' glyph='home'/>
                  </Tab>
                  <Tab>
                    <Icon bundle='fontello' glyph='user'/>
                  </Tab>
                  <Tab>
                    <Icon bundle='fontello' glyph='cog'/>
                  </Tab>
                </TabList>
              </TabContainer>
            </PanelFooter>
          </Panel>
        </PanelContainer>
    )
  }
}
    
    
class UserInformationPanel6 extends React.Component {
  render() {
    return (

        <PanelContainer controlStyles='bg-green fg-white'>
            <Panel>
              <PanelHeader className='bg-green'>
                <Grid>
                  <Row>
                    <Col xs={12} className='fg-white'>
                      <h4>Points: 2,500</h4>
                      <h6>from 9 campaigns</h6>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                        <table style={{width: '90%'}}>
                          <tr><td>Campaigns </td></tr>
                          <tr><td style={{paddingLeft: 20}}>Active </td><td style={{textAlign: 'right'}}>3</td></tr>
                          <tr><td style={{paddingLeft: 20}}>Complete </td><td style={{textAlign: 'right'}}>6</td></tr>
                          <tr><td>Rewards </td></tr>
                          <tr><td style={{paddingLeft: 20}}>Pending </td><td style={{textAlign: 'right'}}>2</td></tr>
                        </table>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
    )
  }
}
    

class UserProfile extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PanelContainer controlStyles='bg-grayishcyan fg-white'>
              <Panel className='force-collapse'>
                <PanelHeader className='bg-grayishcyan fg-white tabs'>
                  <TabContainer id='tab-6'>
                    <TabList>
                      <Tab active>
                      <Icon bundle='fontello' glyph='home' style={{marginRight: 10}} />Information
                      </Tab>
                      <Tab>
                        <Icon bundle='fontello' glyph='user' style={{marginRight: 10}} />Trends
                      </Tab>
                      <Tab>
                        <Icon bundle='fontello' glyph='cog' style={{marginRight: 10}} />Campaigns
                      </Tab>
                    </TabList>
                  </TabContainer>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <TabContent tabContainerID='tab-6'>
                          <TabPane>
                            <UserInformationPanel1  />
                          </TabPane>
                          <TabPane>
                            <UserInformationPanel2  />
                          </TabPane>
                          <TabPane>
                            <UserInformationPanel3  />
                          </TabPane>
                          <TabPane>
                            <UserInformationPanel4  />
                          </TabPane>
                          <TabPane>
                            <UserInformationPanel5  />
                          </TabPane>
                                <TabPane tab='tpc_hf:landscape'>
                            <UserInformationPanel6  />
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
                <PanelFooter className='bg-darkcyan fg-white tabs'>
                  <TabContainer>
                    <TabList tabContainerID='tab-6' tabContinuation>
                      <Tab>
                        <Icon bundle='fontello' glyph='th'/>
                      </Tab>
                      <Tab>
                        <Icon bundle='fontello' glyph='archive'/>
                      </Tab>
                      <Tab>
                        <Icon bundle='fontello' glyph='docs-landscape'/>
                      </Tab>
                    </TabList>
                  </TabContainer>
                </PanelFooter>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
      </Grid>
    )
  }
}
class SocialBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: 'follow me',
      followActive: false,
      likeCount: 999,
      likeActive: false,
      likeTextStyle: 'fg-white'
    };
  }
  handleFollow() {
    this.setState({
      follow: 'followed',
      followActive: true
    });
  }
  handleLike() {
    this.setState({
      likeCount: 1000,
      likeActive: true,
      likeTextStyle: 'fg-orange75'
    });
  }
  render() {
    return (
      <div style={{height: 350, marginTop: -25, backgroundImage: 'url(/imgs/shots/Blick_auf_Manhattan.JPG)', backgroundSize: 'cover', position: 'relative', marginBottom: 25, backgroundPosition: 'center'}}>
        <div className='social-cover' style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        </div>
        <div className='social-desc'>
          <div>
            <h1 className='fg-white'>Mountain View, CA, USA</h1>
            <h5 className='fg-white' style={{opacity: 0.8, marginTop: 50}}>719 N Shoreline Blvd</h5>
            <h5 className='fg-white' style={{opacity: 0.8}}>Mountain View, CA</h5>
            <h5 className='fg-white' style={{opacity: 0.8}}>Phone: (650)555-1234</h5>
            <a href='/app/mailbox/compose'><h5 className='fg-white' style={{opacity: 0.8}}>E-mail: jane.doe@ihealthlabs.com</h5></a>
          </div>
        </div>
        <div className='social-avatar'>
          <Img src='/imgs/avatars/avatar.jpg' height='100' width='100' style={{display: 'block', borderRadius: 100, border: '2px solid #fff', margin: 'auto', marginTop: 50}} />
          <h4 className='fg-white text-center'>Jane Doe</h4>
          <h5 className='fg-white text-center' style={{opacity: 0.8}}>DevOps Engineer, iHealth</h5>
          <h5 className='fg-white text-center' style={{opacity: 0.8}}>Unique ID: 1234567</h5>
          <hr className='border-black75' style={{borderWidth: 2}}/>
          <div className='text-center'>
            <Button outlined inverse retainBackground active={this.state.followActive} bsStyle='brightblue' onClick={this.handleFollow.bind(this)} style={{marginRight: 15}}>
              <span>Call</span>
            </Button>
            <Button outlined inverse retainBackground active={this.state.followActive} bsStyle='brightblue' onClick={this.handleFollow.bind(this)}>
              <span>Chat</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

class Body extends React.Component {
  componentDidMount() {
    $('html').addClass('social');
  }
  componentWillUnmount() {
    $('html').removeClass('social');
  }
  render() {
    return (
      <Container id='body' className='social'>
        <SocialBanner />
        <UserProfile />
        {this.props.children}
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
