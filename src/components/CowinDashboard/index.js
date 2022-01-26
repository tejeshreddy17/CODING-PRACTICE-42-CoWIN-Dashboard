// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  BackgroundContainer,
  LogoContainer,
  LogoHeading,
  LogoImage,
  Heading,
  FailureHeading,
  FailureImage,
} from './styledComponents'

import VaccinationCoverage from '../VaccinationCoverage'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

const LoadingValues = {
  failure: 'failure',
  success: 'success',
  initial: 'initial',
  loading: 'loading',
}

class CowinDashboard extends Component {
  state = {
    last7daysvaccination: [],
    vaccinationByAge: [],
    isLoading: LoadingValues.initial,
    Vaccinationbygender: [],
  }

  componentDidMount() {
    this.gettingDetails()
  }

  gettingDetails = async () => {
    this.setState({isLoading: LoadingValues.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.setState({
        last7daysvaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        Vaccinationbygender: data.vaccination_by_gender,
        isLoading: LoadingValues.success,
      })
    } else {
      this.setState({isLoading: LoadingValues.failure})
    }
  }

  renderingLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderingContent = () => {
    const {
      last7daysvaccination,
      vaccinationByAge,
      Vaccinationbygender,
    } = this.state
    return (
      <>
        <VaccinationCoverage data={last7daysvaccination} />
        <VaccinationByGender data={Vaccinationbygender} />
        <VaccinationByAge data={vaccinationByAge} />
      </>
    )
  }

  renderingFailureView = () => (
    <>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureHeading color="white">Something Went wrong</FailureHeading>
    </>
  )

  finalRendering = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case 'success':
        return this.renderingContent()
      case 'failure':
        return this.renderingFailureView()
      case 'loading':
        return this.renderingLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <BackgroundContainer>
        <LogoContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <LogoHeading>Co-Win</LogoHeading>
        </LogoContainer>
        <Heading>CoWin Vaccination in India</Heading>
        {this.finalRendering()}
      </BackgroundContainer>
    )
  }
}

export default CowinDashboard
