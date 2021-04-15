import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Apiconfig from '../../ApiConfig'
import {Button} from 'react-bootstrap'
export default class RemoveMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member:[
                {
                    "role": "manager",
                    "_id": "601afd6e181f03f973737f20",
                    "userId": "60168e71bff7b6488838bb04"
                },
                {
                    "role": "member",
                    "_id": "601afd6e181f03f973737f21",
                    "userId": "601a96cacef63ca71b9e5c90"
                }
            ],
            projectId:''
        }
    }
    removeMember = (e) => {
        let copyMembers = [...this.state.members]
        let projectId= this.state.projectId;
        let i 
        axios.patch(`${Apiconfig}/members/remove/${projectId}`, this.members[1].userId).then((res) => {
            if (res.data === 'member has been removed') {
                copyMembers.split(1,1)
            }
            else {
                console.log('something went wrong')
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <Button onClick={this.removeMember} variant="danger">Delete Member</Button> 
            </div>
        )
    }
}
