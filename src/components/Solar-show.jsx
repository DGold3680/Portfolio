
import dp from "../assets/dp.png";
const OuterTags = [
  "JavaScript",
  "ReactJs",
  "AstroJs",
  "Firebase",
  "NextJs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
];
const InnerTags = ["HTMl/CSS", "Bootstrap", "Tailwind", "SASS"];

export default function SolarShow() {
  return (
    <div>
      <div class="canvas flex justify-center">
        <div class="outer">
          {OuterTags.map((tag) => {
            return (
              <div class="textBox-Position box-border text-sm font-light mb-2 mr-1 ml-0 mt-0 rounded-3xl bg-bgSec text-tert py-1.5 px-4 inline-block">
                {tag}
              </div>
            );
          })}
          <div class="inner">
            {InnerTags.map((tag) => {
              return (
                <div class="textBox-Position box-border text-sm font-light mb-2 mr-1 ml-0 mt-0 rounded-3xl bg-bgSec text-tert py-1.5 px-4 inline-block">
                  {tag}
                </div>
              );
            })}
            <img src={{dp}} alt="display picture" class="core" />
          </div>
        </div>
      </div>
    </div>
  );
}
