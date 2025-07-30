
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

function Chart({ forecast,topic, datakey,dataunit}) {
 
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-center mb-4">5-Day {topic} Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={forecast}
          margin={{ top: 10, right: 30, left: 20, bottom:20 }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date"  />
          <YAxis unit={dataunit} />
          <Tooltip />
          <Line type="monotone" dataKey={datakey} stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
