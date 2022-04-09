import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import { TodoFilterActions } from "../../redux/actions/todoFilter"
import {connect} from "react-redux"
import {useSelector, useDispatch} from "react-redux"

const TodoFilters = (props) => {
  // const activeStatus = props.todoFilter
  const activeStatus = useSelector((state) => {return state.todo_filter})
  const dispatch = useDispatch()

  const handleChangeStatus = (status) => {
    // props.dispatchChangeFilter(status)
    dispatch(TodoFilterActions.changeFilter(status))
  }

  return (
    <div className="mb-3">
      <Nav pills>
        <NavItem>
          <NavLink
            active={activeStatus === "all"}
            tag="button"
            onClick={(event) => handleChangeStatus("all")}
          >
            All
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            tag="button"
            active={activeStatus === "completed"}
            onClick={(event) => handleChangeStatus("completed")}
          >
            Completed
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            tag="button"
            active={activeStatus === "incomplete"}
            onClick={(event) => handleChangeStatus("incomplete")}
          >
            Incomplete
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {todoFilter: state.todo_filter}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChangeFilter: (status) => dispatch(TodoFilterActions.changeFilter(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters)
