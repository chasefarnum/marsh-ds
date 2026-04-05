"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DropdownMenuPage() {
  return (
    <>
      <PageHeader
        title="Dropdown Menu"
        description="A menu of actions triggered by a button."
      />

      <SectionTitle>Item Actions</SectionTitle>
      <Preview>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Manage</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Add New</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Update Availability</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Export (PDF)</DropdownMenuItem>
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Preview>
    </>
  );
}
