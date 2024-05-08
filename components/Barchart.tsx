import { BarChart } from "@mui/x-charts";

const uData = [0.69, 0.8, 0.12, 0.25, 0, 0, 0, 0.36, 0.49];
const xLabels = [
  "21h",
  "00h \n5 mai",
  "03h",
  "06h",
  "09h",
  "12h",
  "15h",
  "18h",
  "21h",
];

export const TinyBarChart = () => {
  return (
    <>
      <BarChart
        width={500}
        height={300}
        grid={{ horizontal: true }}
        series={[
          {
            data: uData,
            label: "précipitations (mm)",
            type: "bar",
            highlightScope: { highlighted: "series", faded: "global" },
          },
        ]}
        yAxis={[
          {
            label: "Précipitations (mm)",
          },
        ]}
        xAxis={[
          {
            scaleType: "band",
            data: xLabels,
            tickPlacement: "end",
            tickLabelPlacement: "tick",
          },
        ]}
        slotProps={{
          bar: {
            clipPath: `inset(0px round 10px 10px 0px 0px)`,
          },
          legend: { hidden: true },
        }}
      ></BarChart>
    </>
  );
};
