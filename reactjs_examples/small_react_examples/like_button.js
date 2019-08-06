'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Thank U for liking this page.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'click here to Like me'
    );
  }
}
// ... the starter code you pasted ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);