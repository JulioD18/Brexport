import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

type LChartProps = {
  title: string;
  data: any;
};

export default function LChart({ title, data }: LChartProps) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      const formattedData = data.map((item: any) => ({
        season: item[0],
        goalsFor: item[1].for.total,
        goalsAgainst: item[1].against.total,
      }));

      console.log(formattedData);
      setChartData(formattedData);
      setLoaded(true);
    }
  }, [!data]);

  return (
    <>
      {loaded && (
        <Box display="grid" justifyContent="center" color="white">
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          <LineChart
            xAxis={[
              {
                label: "Season",
                valueFormatter: (value) => value.toString(),
                data: chartData.map((item) => item.season),
              },
            ]}
            series={[
              {
                type: "line",
                label: "Goals For",
                color: "#057a26",
                data: chartData.map((item) => item.goalsFor.total),
              },
              {
                type: "line",
                label: "Goals Against",
                color: "#d5ff00",
                data: chartData.map((item) => item.goalsAgainst.total),
              },
            ]}
            width={400}
            height={400}
          />
        </Box>
      )}
    </>
  );
}
