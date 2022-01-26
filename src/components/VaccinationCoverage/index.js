// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import {
  BackgroundContainerVaccinationCoverage,
  VCHeading,
} from './styledComponents'

const VaccinationCoverage = props => {
  const {data} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <BackgroundContainerVaccinationCoverage>
      <VCHeading>Vaccination Coverage</VCHeading>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} width="100%" height="100%">
          <XAxis dataKey="vaccine_date" />
          <YAxis tickFormatter={DataFormatter} />
          <Legend />

          <Bar
            dataKey="dose_2"
            name="Dose_2"
            fill="#5a8dee"
            barSize={40}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose_1"
            name="Dose_1"
            fill="#f54394"
            barSize={40}
            radius={[10, 10, 0, 0]}
            margin={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </BackgroundContainerVaccinationCoverage>
  )
}

export default VaccinationCoverage
