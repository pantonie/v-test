import React from "react";

export interface ICarDetails {
  "id": string,
  "modelName": string,
  "bodyType": string,
  "modelType": string,
  "imageUrl": string
}

export interface IChevronButtonProps {
  onClick: React.MouseEventHandler<HTMLImageElement>;
  disabled: boolean;
  leftButton?: boolean;
  margin?: string;
}