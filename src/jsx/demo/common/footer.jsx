export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: 0
    };
  }
  componentDidMount() {
    this.setState({
      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
    });
  }
  render() {
    return (
      <div id='footer-container' style={{position: 'fixed', bottom: 0, zIndex: 100000001, width: '100%', marginLeft: 0}}>
        <Grid id='footer' className='text-center' >
          <Row>
            <Col xs={12}>
              <div>© 2015 Powered by iHealth Connected Care System - v0.0.1</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
