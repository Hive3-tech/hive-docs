import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import { ClipboardCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function QuestsAndTasksPage() {
  const tocItems = [{ id: 'coming-soon', label: 'Coming soon' }];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Task Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Task Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Task creation and management tools are in progress.
        </p>

        <section id="coming-soon" className="space-y-4">
          <Callout type="warning" title="Coming soon">
            Tasks are currently a placeholder experience in Hive3 and do not yet have a full
            end-to-end workflow.
          </Callout>

          <p className="text-sm text-muted-foreground">
            In the meantime, use{' '}
            <Link to="/quests-guide" className="underline">
              Quests Guide
            </Link>{' '}
            for objective-based workflows available today.
          </p>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/jobs-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Jobs Guide
          </Link>
          <Link
            to="/credentials-and-nfts"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Credentials
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
