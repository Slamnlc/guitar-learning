import React from "react";

export interface LogoProps {
  width: number
  height: number
  onClick?: (event: React.MouseEvent) => void
  fill?: string
}
