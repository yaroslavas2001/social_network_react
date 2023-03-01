import React, { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { PieTypeModel } from "../Models/Models";

import style from "./PieChart.module.css"

type propsType = {
  title: string
  data: Array<PieTypeModel>
}
const PieChart: FC<propsType> = ({ title, data }) => {
  // let canvas = document.getElementById('canvas') as
  //   HTMLCanvasElement;
  const canvas = useRef<HTMLCanvasElement>();
  let totalValue = (data.map((el) => el.value)).reduce((acc, num) => acc + num, 0)

  function drawLine(canvas: any, startX: number,
    startY: number, endX: number, endY: number) {

    canvas.beginPath();
    canvas.moveTo(startX, startY);
    canvas.lineTo(endX, endY);
    canvas.stroke();
  }
  function drawArc(ctx: any, centerX: number, centerY: number,
    radius: number, startAngle: number, endAngle: number) {

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
  }
  function drawPieSlice(ctx: any, centerX: number, centerY: number, radius: number,
    startAngle: number, endAngle: number, color: string) {

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }
  useEffect(() => {
    if (canvas.current) {
      let context = canvas.current.getContext("2d")
      console.log("weight",context.lineWidth)
      context.clearRect(0,0, canvas.current.width,canvas.current.height)
      // drawPieSlice(context, 30, 30, 26, Math.PI / 2, Math.PI / 3 + Math.PI / 4, '#ff0000');
      // drawPieSlice(context, 30, 30, 26, 0, Math.PI / 2, 'blue');
      let start_angle = 0
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let slice_angle = 2 * Math.PI * element.value / totalValue
        // x y radius
        drawPieSlice(context, 60, 60, 60, start_angle, slice_angle + start_angle, element.backgroundColor);
        start_angle += slice_angle
      }
    }
  }, [data, canvas.current])


  return (<div className={style.block}>
    <div>{title}</div>
    <canvas className={style.canvas} ref={canvas} id="canvas"></canvas>
  </div>

  );
}


export default PieChart;
