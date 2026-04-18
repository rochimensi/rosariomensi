"use client";

import { TypewriterText } from "./TypewriterText";

type Props = {
  text: string;
  className?: string;
  msPerChar?: number;
  /** Start typing when this line scrolls into view (use below the fold). Hero omits this. */
  deferUntilInView?: boolean;
};

export function HeroEyebrowTypewriter({ text, className, msPerChar = 52, deferUntilInView = false }: Props) {
  return (
    <TypewriterText
      text={text}
      className={className}
      msPerChar={msPerChar}
      as="p"
      deferUntilInView={deferUntilInView}
    />
  );
}
