import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import JobAdvertisement from '../services/jobAdvertisementService'
import { Icon, Label, Menu, Table, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function EmployerDetails() {
    let { id } = useParams()

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisement()
        jobAdvertisementService.findAllByEmployerIdAndActiveTrue(id).then(result => setJobAdvertisements(result.data.data))
    }, [])


    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Job List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Campany Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>View</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (

                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPosition.position}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell><Link to={`/jobs/${jobAdvertisement.id}`}><Button>View</Button></Link></Table.Cell>
                            </Table.Row>



                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}