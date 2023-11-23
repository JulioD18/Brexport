import { FC } from "react";
import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

type LChartProps = {
  title: string;
  // data: JSON;
};

export default function LChart({ title }: LChartProps) {
  return (
    <>
      {/* <Typography
        variant="h3"
        noWrap
        component="div"
        color="white"
        height="20%"
      >
        {title}
      </Typography> */}
      <LineChart
        title={title}
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={600}
        height={400}
      />
    </>
  );
}
