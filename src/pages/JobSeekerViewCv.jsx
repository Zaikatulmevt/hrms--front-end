import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CvService from '../services/cvService'
import { Button, Header, Icon, Table } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function JobSeekerViewCv() {

    let { id } = useParams()

    const [JobSeekerCvs, setJobSeekerCvs] = useState([])
    useEffect(() => {
        let cvService = new CvService()
        cvService.getCvsByJobSeekerId(id).then(result => setJobSeekerCvs(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h2">
                <Icon name="clipboard" />
                <Header.Content>Job Seeker's Cvs</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>
                        <Table.HeaderCell>View</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        JobSeekerCvs.map(cv => (

                            <Table.Row key={cv.id}>
                                <Table.Cell>{cv.jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{cv.jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{cv.description}</Table.Cell>
                                <Table.Cell>{cv.createdDate}</Table.Cell>
                                <Table.Cell><Link to={`/jobSeekers/${id}/${cv.id}`}><Button>View</Button></Link></Table.Cell>
                            </Table.Row>


                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}