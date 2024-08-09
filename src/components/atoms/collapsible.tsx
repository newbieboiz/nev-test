import { cn } from '@/utils/cn';
import { MinusIcon } from './minus-icon';
import { PlusIcon } from './plus-icon';

interface CollapsibleProps {
  children?: React.ReactNode;
  className?: string;
}

export function Collapsible({ children, className }: CollapsibleProps) {
  return (
    <details className={cn('group border-b border-gray-200', className)}>
      {children}
    </details>
  );
}

interface CollapsibleTriggerProps {
  children?: React.ReactNode;
  className?: string;
}

export function CollapsibleTrigger({
  children,
  className,
}: CollapsibleTriggerProps) {
  return (
    <summary
      className={cn(
        'relative py-3 h-16 flex flex-col justify-center uppercase',
        className,
      )}
    >
      {children}
      <span className='absolute top-1/2 right-0 -translate-y-1/2'>
        <PlusIcon className='w-5 h-5 text-gray-700 block group-open:hidden' />
        <MinusIcon className='w-5 h-5 text-gray-700 hidden group-open:block' />
      </span>
    </summary>
  );
}

interface CollapsibleContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function CollapsibleContent({
  children,
  className,
}: CollapsibleContentProps) {
  return <div className={cn('pb-3', className)}>{children}</div>;
}
