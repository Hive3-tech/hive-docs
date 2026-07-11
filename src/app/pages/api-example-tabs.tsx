import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { CodeBlock } from "../components/doc-components";
import {
  buildCurl,
  buildFetch,
  buildPython,
  type ApiEndpoint,
} from "./api-endpoint-types";

export function RequestExampleTabs({ endpoint }: { endpoint: ApiEndpoint }) {
  return (
    <Tabs defaultValue="curl">
      <TabsList>
        <TabsTrigger value="curl">curl</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
      </TabsList>
      <TabsContent value="curl">
        <CodeBlock title="Example request" language="bash" code={buildCurl(endpoint)} />
      </TabsContent>
      <TabsContent value="python">
        <CodeBlock title="Example request" language="python" code={buildPython(endpoint)} />
      </TabsContent>
      <TabsContent value="javascript">
        <CodeBlock title="Example request" language="javascript" code={buildFetch(endpoint)} />
      </TabsContent>
    </Tabs>
  );
}
