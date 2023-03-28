import React, { useEffect, useState } from "react";
import Parse from 'parse/dist/parse.min.js'
import { bindActionCreators } from 'redux'
import * as scheduleActions from "../../redux/actions/scheduleActions"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const SchedulePage = ({ schedules, actions, loading }) => {

    useEffect(() => {
        if (schedules.length === 0) {
            actions.schedule.loadAllSchedules().catch(error => {
                alert("Loading schedules failed " + error)
            })
        }
        //useEffect with an empty array is equivalent to componentDidMount
        //Otherwise, would run everytime it renders
    }, [])

    return (<div>
        <h2>Manage Schedules</h2>
        <h3>{schedules.length}</h3>
        <button>Upload Schedule</button>
    </div>);

}
SchedulePage.propTypes = {
    actions: PropTypes.object.isRequired,
    schedules: PropTypes.array.isRequired,
}

//ownProps not need, so it is removed
function mapStateToProps(state) {
    return {
        schedules: state.schedules,
        loading: state.apiCallsInProgress > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            schedule: bindActionCreators(scheduleActions, dispatch),
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
