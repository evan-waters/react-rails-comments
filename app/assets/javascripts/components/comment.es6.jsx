class Comment extends React.Component {
  render () {
    return (
      <li className="comment list-group-item">
        <h4>{this.props.author}</h4>
        <p>{this.props.text}</p>
      </li>
    );
  }
}
