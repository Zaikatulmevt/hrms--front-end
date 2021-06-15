import React, {useEffect, useState} from 'react'
import JobSeekerService from "../services/jobSeekerService";
import {Button, Header, Icon, Table} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function EmployeeList() {

    const [jobSeekers, setJobSeekers] = useState([])
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeeker().then(result => setJobSeekers(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline"/>
                <Header.Content>Job Seeker List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Birth Year</Table.HeaderCell>
                        <Table.HeaderCell>View Cvs</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (

                            <Table.Row key={jobSeeker.id}>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.birthYear}</Table.Cell>
                                <Table.Cell><Link to = {`/jobSeekers/${jobSeeker.id}`}><Button>View Cvs</Button></Link></Table.Cell>
                            </Table.Row>


                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}