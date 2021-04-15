import React, { Component } from 'react';
import axios from 'axios'
import API_URL from "../../ApiConfig";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class UpdateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectid: props.location.state.id,
            projectTitle: props.location.state.title,
            projectStartDate: props.location.state.startDate,
            projectEndDate: props.location.state.endDate,
            newData: {},
            userLoggedInId: props.location.state.userLoggedInId,
            redirect: false
        }
    }

    getChangeData = (event) => {
        let fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        })
        console.log(this.state[fieldName]);
    }

    saveChnages = (event) => {
        event.preventDefault();
        const newData = {
            "title": this.state.projectTitle,
            "startDate": this.state.projectStartDate,
            "endDate": this.state.projectEndDate
        };
        axios.patch(`${API_URL}/project/update/${this.state.projectid}`, newData)
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({
                    newData: res.data,
                    redirect: true
                })

            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    render() {
        console.log(this.state.userLoggedInId);
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: `/project/details/${this.state.projectid}`
                , state:
                {
                    projectDetils: this.state.newData,
                    userLoggedInId: this.state.userLoggedInId
                }
            }
            } />;
        }
        console.log(this.state.projectEndDate);
        return (
            <div className="card">
                <h3 className="card-header">Update Project Details</h3>
                <div className="card-body">
                    <form onSubmit={this.saveChnages}>
                        <fieldset>
                            <div class="form-group">
                                <label>Project title</label>
                                <input type="text" name="projectTitle" class="form-control" defaultValue={this.state.projectTitle} onChange={this.getChangeData} />
                            </div>
                            <div class="form-group">
                                <label>Start Date</label>
                                <input type="date" name="projectStartDate" class="form-control" defaultValue={this.state.projectStartDate} onChange={this.getChangeData} />
                            </div>
                            <div class="form-group">
                                <label>End Date</label>
                                <input type="date" class="form-control" name="projectEndDate" defaultValue={this.state.projectEndDate} onChange={this.getChangeData} />
                            </div>

                            <div className="card-footer">
                                <Link to="/" className="btn btn-default">Cancel</Link>
                                {/* <Link to={{ pathname: `/project/details/${this.state.projectid}`, state: { projectDetils: this.state.newData } }} className="btn btn-success" >Save</Link> */}
                                {/* <Link to={{ pathname: `/project/details/${this.state.projectid}`, state: { projectDetils: this.state.newData } }} className="btn btn-success" >Save</Link> */}
                                <button type="submit" className="btn btn-danger" >Save</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div >
        );
    }
}

export default UpdateProject;
