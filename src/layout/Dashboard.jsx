import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import SideBar from './SideBar'
import { Grid } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import { Route } from 'react-router'
import JobSeekerList from "../pages/JobSeekerList";
import JobSeekerViewCv from '../pages/JobSeekerViewCv'
import JobSeekerCv from '../pages/JobSeekerCv'
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail'
import EmployerDetails from '../pages/EmployerDetails'

export default function Dashboard() {
    return (
        <div>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path ={"/jobs"} component = {JobAdvertisementList}/>
                        <Route exact path={"/jobs/:id"} component= {JobAdvertisementDetail}/>
                        <Route exact path = {"/employers"} component={EmployerList}/>
                        <Route exact path = {"/employers/:id"} component ={EmployerDetails}/>
                        <Route exact path = {"/jobSeekers/"} component={JobSeekerList}/>
                        <Route exact path = {"/jobSeekers/:id"} component={JobSeekerViewCv}/>
                        <Route exact path = {"/jobSeekers/:id/:cvId"} component={JobSeekerCv}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}