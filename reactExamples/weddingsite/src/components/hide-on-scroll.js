// 1. Define a state variable for showing/hiding the action-button 
state = {
  isActionButtonVisible: true
}

// 2. Define a variable that will keep track of the current scroll position
_listViewOffset = 0

// 3. Add an onScroll listener to your listview/scrollview
<ListView
  ...
  onScroll={this._onScroll}
  ...
/>

// 3. Add some logic in the scroll listener for hiding the action button when scrolling down
_onScroll = (event) => {
  // Simple fade-in / fade-out animation
  const CustomLayoutLinear = {
    duration: 100,
    create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
  }
  // Check if the user is scrolling up or down by confronting the new scroll position with your own one
  const currentOffset = event.nativeEvent.contentOffset.y
  const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
    ? 'down'
    : 'up'
  // If the user is scrolling down (and the action-button is still visible) hide it
  const isActionButtonVisible = direction === 'up'
  if (isActionButtonVisible !== this.state.isActionButtonVisible) {
    LayoutAnimation.configureNext(CustomLayoutLinear)
    this.setState({ isActionButtonVisible })
  }
  // Update your scroll position
  this._listViewOffset = currentOffset
}

// 4. In you render show you action-button only if state.isActionButtonVisible === true
<View style={styles.container}>
  {yourListView}
  {this.state.isActionButtonVisible ? <FloatingMenu /> : null}
</View>