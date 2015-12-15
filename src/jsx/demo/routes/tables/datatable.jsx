import classNames from 'classnames';
import ProgressBar from 'routes/tables/progressbar';

class Datatable extends React.Component {
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
      <Table id='example' className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Target Group</th>
            <th>Duration</th>
            <th>Points</th>
            <th>Participants</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Walking challenge</td><td>Overweight</td><td>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>75</td>
            <td><ProgressBar /></td>
          </tr>
          <tr><td>Continuous reading - Blood pressure</td><td>Hypertension</td><td>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>250</td><td style={{textAlign: 'center'}}>50</td>
            <td><ProgressBar /></td>
          </tr>
          <tr><td>Thousand steps</td><td>Obese</td><td>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>250</td><td style={{textAlign: 'center'}}>250</td>
            <td><ProgressBar /></td>
          </tr>
          <tr><td>Continuous reading - Blood glucose</td><td>Diabetic</td><td>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>125</td>
            <td><ProgressBar /></td>
          </tr>
          <tr><td>Step Out challenge</td><td>All</td><td>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>100</td><td style={{textAlign: 'center'}}>500</td>
            <td><ProgressBar /></td>
          </tr>
          <tr><td>Ten thousand steps</td><td>Overweight</td><td>01/01/2016 - 02/02/2016</td><td style={{textAlign: 'center'}}>500</td><td style={{textAlign: 'center'}}>500</td>
            <td><ProgressBar /></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Datatable />
    );
  }
}
