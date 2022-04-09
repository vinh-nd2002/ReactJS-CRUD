import React from "react"
import { Spinner } from "reactstrap"

const withLoading = (Component) => {
  class HOC extends React.Component {
    render() {
      if (this.props.loading) {
        return (
          <div className="d-flex align-items-center justify-content-center">
            <Spinner color="primary" />
            <div className="ms-2">Loading...</div>
          </div>
        )
      }

      return <Component {...this.props} />
    }
  }

  return HOC
}

export default withLoading
