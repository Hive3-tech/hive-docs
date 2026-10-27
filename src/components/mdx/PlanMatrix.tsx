import { Fragment } from "react";
import { Link } from "react-router";
import { Check, Minus } from "lucide-react";
import { planGroups, tiers, type PlanCell, type PlanRow } from "@/content/plans";
import { PlanBadge } from "./PlanBadge";

function Cell({ value, comingSoon }: { value: PlanCell; comingSoon?: boolean }) {
  if (comingSoon) return <span className="text-xs font-medium text-muted-foreground">Coming soon</span>;
  if (value === true) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-success/15 text-success" role="img" aria-label="Included">
        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex text-muted-foreground/60" role="img" aria-label="Not included">
        <Minus className="size-4" aria-hidden="true" />
      </span>
    );
  }
  return <span className="text-[0.8125rem] font-medium leading-tight text-foreground">{value}</span>;
}

function FeatureName({ row }: { row: PlanRow }) {
  return (
    <>
      {row.href ? (
        <Link to={row.href} data-plain className="font-medium text-foreground hover:text-primary">
          {row.feature}
        </Link>
      ) : (
        <span className="font-medium text-foreground">{row.feature}</span>
      )}
      {row.description ? <span className="mt-0.5 block text-xs font-normal leading-snug text-muted-foreground">{row.description}</span> : null}
    </>
  );
}

/** Plan comparison rendered from src/content/plans.ts. `group` renders one group; omit it for all. */
export function PlanMatrix({ group }: { group?: string }) {
  const groups = group ? planGroups.filter((g) => g.id === group) : planGroups;
  return (
    <div className="table-wrap">
      <table className="min-w-[44rem]">
        <thead>
          <tr>
            <th scope="col" className="w-[34%]">
              Feature
            </th>
            {tiers.map((tier) => (
              <th key={tier.id} scope="col" className="text-center align-bottom">
                <PlanBadge tier={tier.id} plus={false} />
                <span className="mt-1.5 block text-sm font-semibold text-foreground">{tier.price}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <Fragment key={g.id}>
              {groups.length > 1 || !group ? (
                <tr>
                  <th colSpan={tiers.length + 1} scope="colgroup" className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                    {g.title}
                  </th>
                </tr>
              ) : null}
              {g.rows.map((row) => (
                <tr key={`${g.id}-${row.feature}`}>
                  <td>
                    <FeatureName row={row} />
                  </td>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="text-center align-middle">
                      <Cell value={row.values[tier.id]} comingSoon={row.comingSoon} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
