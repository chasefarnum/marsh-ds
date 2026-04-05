"use client";

import {
  PageHeader,
  SectionTitle,
  Preview,
} from "@/components/ds/page-header";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";

export default function MenubarPage() {
  return (
    <>
      <PageHeader
        title="Menubar"
        description="A horizontal menu bar with dropdown menus, commonly used in application-style interfaces."
      />

      <SectionTitle>Application Menu</SectionTitle>
      <Preview>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New</MenubarItem>
              <MenubarItem>Open</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Export as PDF</MenubarItem>
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Grid View</MenubarItem>
              <MenubarItem>List View</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Show Prices</MenubarItem>
              <MenubarItem>Show Details</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Documentation</MenubarItem>
              <MenubarItem>Keyboard Shortcuts</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>About</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Preview>
    </>
  );
}
