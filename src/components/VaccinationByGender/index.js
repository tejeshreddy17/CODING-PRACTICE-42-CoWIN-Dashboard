// Write your code here
// Write your code here

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {
  BackgroundContainerVaccinationCoverage,
  VCHeading,
} from './styledComponents'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <BackgroundContainerVaccinationCoverage>
      <VCHeading>Vaccination by gender</VCHeading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width="100%" height="100%" align="middle">
          <Pie
            cx="50%"
            cy="50%"
            data={data}
            startAngle={0}
            endAngle={180}
            dataKey="count"
            innerRadius="40%"
            outerRadius="70%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill=" #2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </BackgroundContainerVaccinationCoverage>
  )
}

export default VaccinationByGender
