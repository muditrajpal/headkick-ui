import React from "react";
import { render } from "react-dom";
import { Message, Icon } from "semantic-ui-react";

const getColor = (color) => {
  switch (color) {
    case "warning":
      return { warning: true };
    case "danger":
      return { negative: true };
    case "success":
      return { positive: true };
    case "info":
      return { info: true };
    default:
      return {};
  }
};
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.error ? true : false,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ open: false }), 4000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.error ? true : false });
  }

  render() {
    return (
      <div className="showHideNotification">
        {this.state.open ? (
          <Message attached="bottom" color={this.props.color}>
            <Icon name="help" />
            {this.props.error}
            <Icon
              name="close"
              onClick={() => this.setState({ open: false })}
            ></Icon>
          </Message>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const showHideNotification = (error, color) =>
  render(
    <Notification error={error} color={getColor(color)} />,
    document.querySelector("#error-notification")
  );

export default showHideNotification;
