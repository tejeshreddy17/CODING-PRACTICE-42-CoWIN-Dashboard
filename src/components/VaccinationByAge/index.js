// Write your code here

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {
  BackgroundContainerVaccinationCoverage,
  VCHeading,
} from './styledComponents'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <BackgroundContainerVaccinationCoverage>
      <VCHeading>Vaccination by Age</VCHeading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width="100%" height="100%" align="middle">
          <Pie
            cx="50%"
            cy="50%"
            data={data}
            startAngle={0}
            endAngle={360}
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-66" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
