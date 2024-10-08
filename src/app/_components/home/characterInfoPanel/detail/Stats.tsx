import { ComponentProps } from "react";
import { Stat } from "@/app/_type/characterType";

interface StatsProps extends ComponentProps<"div"> {
  stats: Stat[];
  statDifference?: Stat[];
}

const Stats = ({ stats, statDifference, className, ...props }: StatsProps) => {
  return (
    <div
      className={`grid h-full w-full grid-cols-2 items-center justify-items-center text-white ${className}`}
      {...props}
    >
      {stats?.map((stat) => (
        <div
          key={stat.stat_name}
          className="flex w-full max-w-32 items-center justify-center"
        >
          <div className="flex flex-1">
            <p className="flex-1 text-center sm:min-w-20">{stat.stat_name}</p>

            <div className="flex flex-1 flex-col items-center justify-center">
              <p className="text-[10px] sm:text-xs">{stat.stat_value}</p>
              {statDifference &&
                (() => {
                  const statValue = Number(
                    statDifference.find((i) => i.stat_name === stat.stat_name)
                      ?.stat_value,
                  );

                  if (statValue !== 0) {
                    return (
                      <p
                        className={
                          statValue >= 1 ? "text-green-300" : "text-red-300"
                        }
                      >
                        {statValue !== null && statValue >= 0
                          ? `+${statValue}`
                          : statValue}
                      </p>
                    );
                  }

                  return null;
                })()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
