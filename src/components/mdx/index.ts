import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { CardGrid, LinkCard } from "./Cards";
import { CodeBlock } from "./CodeBlock";
import { Endpoint } from "./Endpoint";
import { H2, H3, H4, MdxLink, MdxTable } from "./elements";
import { Figure } from "./Figure";
import { PlanBadge } from "./PlanBadge";
import { PlanMatrix } from "./PlanMatrix";
import { Step, Steps } from "./Steps";
import { Tab, Tabs } from "./Tabs";
import { Path, UI } from "./UI";
import { Walkthrough } from "./Walkthrough";

/** Components available in every MDX file without an import. */
export const mdxComponents: MDXComponents = {
  a: MdxLink,
  h2: H2,
  h3: H3,
  h4: H4,
  table: MdxTable,
  pre: CodeBlock,
  Callout,
  Steps,
  Step,
  Figure,
  Walkthrough,
  PlanBadge,
  PlanMatrix,
  CardGrid,
  LinkCard,
  UI,
  Path,
  Endpoint,
  Tabs,
  Tab,
};
