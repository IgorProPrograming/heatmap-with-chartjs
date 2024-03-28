    
    anychart.onDocumentReady(function () {
    // create a heatmap
    var chart = anychart.heatMap(getData());
    chart.credits().enabled(false);
    // set a custom color scale
    var colorScale = anychart.scales.ordinalColor();
    colorScale.ranges([
      { less: 500, color: "#B0D8A4" },
      { from: 500, to: 900, color: "#FEE191" },
      { from: 900, to: 1300, color: "#FD8060" },
      { greater: 1300, color: "#CC333F" }
    ]);
    chart.colorScale(colorScale);
    // style the coloring in the hovered state
    chart
      .hovered()
      .fill(function () {
        return anychart.color.darken(this.sourceColor, 0.25);
      });
    // hide the labels
    chart.labels(false);
    // customize the axes
    chart.xAxis().stroke(null);
    chart.yAxis().stroke(null);
    chart.yAxis().labels().padding([0, 10, 0, 0]);
    chart.xAxis().labels().padding([0, 0, 10, 0]);
    // set the tooltip
    chart.tooltip().title().useHtml(true);
    chart
      .tooltip()
      .useHtml(true)
      .titleFormat(function () {
        return "Amount - " + this.heat;
      })
      .format(function () {
        return (
          '<span style="color: #CECECE">Day: </span>' +
          this.x +
          "<br/>" +
          '<span style="color: #CECECE">Time: </span>' +
          this.y
        );
      });
    // name the heatmap
    chart
      .title()
      .enabled(true)
      .text("ASML machine data")
      .padding([0, 0, 20, 0]);
    // set the container for the heatmap
    chart.container("container");
    // draw the heatmap
    chart.draw();
  });
  // add the data
  function getData() {
    return [
    {
x: "a",
y: "1",
heat: 535
},
{
x: "a",
y: "2",
heat: 1364
},
{
x: "a",
y: "3",
heat: 143
},
{
x: "a",
y: "4",
heat: 725
},
{
x: "a",
y: "5",
heat: 93
},
{
x: "a",
y: "6",
heat: 1214
},
{
x: "b",
y: "1",
heat: 820
},
{
x: "b",
y: "2",
heat: 303
},
{
x: "b",
y: "3",
heat: 319
},
{
x: "b",
y: "4",
heat: 37
},
{
x: "b",
y: "5",
heat: 90
},
{
x: "b",
y: "6",
heat: 99
},
{
x: "c",
y: "1",
heat: 1161
},
{
x: "c",
y: "2",
heat: 963
},
{
x: "c",
y: "3",
heat: 740
},
{
x: "c",
y: "4",
heat: 741
},
{
x: "c",
y: "5",
heat: 986
},
{
x: "c",
y: "6",
heat: 759
},
{
x: "d",
y: "1",
heat: 1361
},
{
x: "d",
y: "2",
heat: 623
},
{
x: "d",
y: "3",
heat: 588
},
{
x: "d",
y: "4",
heat: 1255
},
{
x: "d",
y: "5",
heat: 759
},
{
x: "d",
y: "6",
heat: 1321
},
{
x: "e",
y: "1",
heat: 445
},
{
x: "e",
y: "2",
heat: 806
},
{
x: "e",
y: "3",
heat: 269
},
{
x: "e",
y: "4",
heat: 268
},
{
x: "e",
y: "5",
heat: 974
},
{
x: "e",
y: "6",
heat: 960
},
{
x: "f",
y: "1",
heat: 124
},
{
x: "f",
y: "2",
heat: 801
},
{
x: "f",
y: "3",
heat: 638
},
{
x: "f",
y: "4",
heat: 687
},
{
x: "f",
y: "5",
heat: 612
},
{
x: "f",
y: "6",
heat: 371
}
    ];
  }