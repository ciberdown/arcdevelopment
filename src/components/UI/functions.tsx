import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";


export interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export interface ElevationProps {
  window?: () => Window;
  children?: React.ReactElement;
}

export const descriptionText = (): JSX.Element => {
  const str: string = [...new Array(50)]
    .map(
      () =>
        `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    )
    .join("\n");
  return <>{str}</>;
}; // Create rtl cache

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export function ElevationScroll(props: Props) {
  let { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
