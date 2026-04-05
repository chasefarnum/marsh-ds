import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";

export default function CommandPage() {
  return (
    <>
      <PageHeader
        title="Command"
        description="A command palette for quick search and navigation."
      />

      <SectionTitle>Command Palette</SectionTitle>
      <Preview>
        <Command className="rounded-lg border border-border">
          <CommandInput placeholder="Search items, actions..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Items">
              <CommandItem>Item Alpha</CommandItem>
              <CommandItem>Item Beta</CommandItem>
              <CommandItem>Item Gamma</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Collections">
              <CommandItem>Collection One</CommandItem>
              <CommandItem>Collection Two</CommandItem>
              <CommandItem>Collection Three</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>Export as PDF</CommandItem>
              <CommandItem>Copy Link</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Preview>
    </>
  );
}
