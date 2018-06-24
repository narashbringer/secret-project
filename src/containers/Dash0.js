import React, { Component } from "react";
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';

export default class Dash extends Component {
  constructor() {
  super();
  this.state = { selected: 1 }
}

  renderItems() {
   return [
     this.renderItem(1, 'Main Dashboard', <Text>Content 1</Text>),
     this.renderItem(2, 'Community Connect', <Text>Content 2</Text>),

   ];
 }

 renderItem(key, title, content) {
   return (
     <SegmentedControlItem

       key={key}
       title={title}
       selected={this.state.selected === key}
       onSelect={() => this.setState({ selected: key })}
     >
       {content}
     </SegmentedControlItem>
   );
 }
  render() {
    return (
      <div className="Home">

          <SegmentedControl
          box>
      {this.renderItems()}
    </SegmentedControl>
      </div>
    );
  }
}
