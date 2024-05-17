"use client";
import Lottie from "lottie-react";

import { ComponentProps } from "react";

function LottieReact(props: ComponentProps<typeof Lottie>) {
  return <Lottie {...props}/>;
}

export default LottieReact;