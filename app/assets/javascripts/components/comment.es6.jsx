class Comment extends React.Component {
  render () {
    return (
      <li className="comment list-group-item">
        <div className="author-image">
          <img src={this.props.authorImageURL}/>
        </div>
        <div className="comment-content">
          <h4>{this.props.author}</h4>
          <p>{this.props.text}</p>
        </div>
      </li>
    );
  }
}
