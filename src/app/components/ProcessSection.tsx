import type { Locale, PageCopy } from "../i18n";

const DIAGRAM_SIZE = 500;
const CENTER = 250;
const RADIUS = 225;
const CENTER_LABEL_FONT_PX = 36;
const DOT_RADIUS = 5;
const STEP_TEXT_WIDTH = 330;

function getDotPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export function ProcessSection({ t, locale }: { t: PageCopy; locale: Locale }) {
  const steps = t.process.steps;
  const n = steps.length;

  return (
    <section id="process" className="w-full border-b border-black/10 py-20 md:py-28 lg:py-32">
      <div className="w-full max-w-none">
        <div className="mb-6 md:mb-8">
          <p className="relative z-10 mb-3 font-sans text-xs tracking-[0.26rem] text-black/55 uppercase md:before:absolute md:before:top-1/2 md:before:right-full md:before:mr-6 md:before:block md:before:h-px md:before:w-[200px] md:before:-translate-y-1/2 md:before:bg-black/25 md:before:content-['']">
            {t.process.eyebrow}
          </p>
          <h2 className="font-display text-4xl italic tracking-[-0.06rem] text-[rgb(38,38,38)] sm:text-5xl">
            {t.process.title}
          </h2>
        </div>

        <div className="hidden w-full md:block">
          <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="mx-auto flex w-full min-w-[1100px] justify-center px-4 pt-[clamp(10.5rem,20vw,16rem)] pb-[clamp(14rem,28vw,22rem)]">
              <div
                className="process-diagram relative shrink-0 overflow-visible"
                style={{ width: DIAGRAM_SIZE, height: DIAGRAM_SIZE, minWidth: DIAGRAM_SIZE }}
              >
                  <svg
                    className="absolute inset-0 text-[rgb(38,38,38)]"
                    width={DIAGRAM_SIZE}
                    height={DIAGRAM_SIZE}
                    viewBox={`0 0 ${DIAGRAM_SIZE} ${DIAGRAM_SIZE}`}
                    aria-hidden
                  >                    
                    <g transform={`translate(${CENTER} ${CENTER})`}>
                      <g className="process-ring-rotate">
                        <circle
                          cx={0}
                          cy={0}
                          r={RADIUS}
                          fill="none"
                          className="stroke-black/25"
                          strokeWidth={1.25}
                          strokeDasharray="6 6"
                        />
                      </g>
                    </g>
                    <g className="process-center-label-group" transform={`translate(${CENTER} ${CENTER})`}>
                      <circle r={58} fill="rgba(0,0,0,0.001)" />
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        className="process-center-label fill-[rgb(38,38,38)]"
                        style={{
                          fontFamily: "var(--font-display-family), Georgia, serif",
                          fontSize: CENTER_LABEL_FONT_PX,
                          fontStyle: "italic",
                        }}
                      >
                        {t.process.centerLabel.split("\n").map((line, i, arr) => (
                          <tspan key={i} x={0} dy={i === 0 ? (arr.length > 1 ? "-0.5em" : "0.35em") : "1.1em"}>
                            {line}
                          </tspan>
                        ))}
                      </text>
                    </g>
                    {steps.map((_, i) => {
                      const pos = getDotPosition(i, n);
                      return (
                        <circle key={`${locale}-dot-${i}`} cx={pos.x} cy={pos.y} r={DOT_RADIUS} className="fill-[rgb(38,38,38)]" />
                      );
                    })}
                  </svg>

                  {steps.map((step, i) => {
                    const pos = getDotPosition(i, n);
                    const isTop = i === 0;
                    const isRight = i === 1;
                    const isBottom = i === 2;
                    const isLeft = i === 3;

                    return (
                      <div
                        key={`${locale}-${step.number}`}
                        className="group absolute"
                        style={{
                          left: pos.x,
                          top: pos.y,
                          transform: isTop
                            ? "translate(-50%, -100%) translateY(-40px)"
                            : isRight
                              ? "translate(40px, -50%)"
                              : isBottom
                                ? "translate(-50%, 40px)"
                                : "translate(-100%, -50%) translateX(-40px)",
                        }}
                      >
                        <div
                          className={
                            isTop || isBottom
                              ? "text-center"
                              : isLeft
                                ? "text-right"
                                : "text-left"
                          }
                          style={{ width: STEP_TEXT_WIDTH }}
                        >
                          <span className="mb-2 block font-sans text-[14px] tracking-[0.26rem] text-black/55 uppercase">
                            {step.number}
                          </span>
                          <h3 className="mb-3 font-display text-3xl italic transition-colors duration-300 group-hover:text-black/55">
                            {step.title}
                          </h3>
                          <p className="font-sans text-md leading-relaxed text-black/65">{step.text}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-0 border-t border-black/10 pt-8 md:hidden" lang={locale}>
          {steps.map((step) => (
            <div key={`${locale}-${step.number}`} className="group border-t border-black/10 py-8 first:border-t-0 first:pt-0">
              <span className="mb-2 block font-sans text-sm tracking-[0.2rem] text-black/55 uppercase">
                {step.number}
              </span>
              <h3 className="mb-6 font-display text-3xl italic transition-colors duration-300 group-hover:text-black/55">
                {step.title}
              </h3>
              <p className="font-sans text-m leading-relaxed text-black/65">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
