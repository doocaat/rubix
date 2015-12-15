export default class extends React.Component {
  render() {
    var progress = this.props.progress || Math.round(Math.random()*90);
    return (
      <div style={{backgroundColor: '#CBCBCB', borderRadius: 10}} >
      <div style={{backgroundColor: '#33A28F', width: progress+'%', height: 17, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}} />
      </div>
    )
  }
}
