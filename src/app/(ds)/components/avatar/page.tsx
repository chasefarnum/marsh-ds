import {
  PageHeader,
  SectionTitle,
  SectionBreak,
  Preview,
} from "@/components/ds/page-header";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarPage() {
  return (
    <>
      <PageHeader
        title="Avatar"
        description="An image element with a fallback for representing a user."
      />

      <SectionTitle>With Image</SectionTitle>
      <Preview>
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/64?u=user1" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/80?u=user2" alt="Alice Green" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/96?u=user3" alt="Bob Mills" />
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarImage src="https://i.pravatar.cc/112?u=user4" alt="Carol Park" />
            <AvatarFallback>CP</AvatarFallback>
          </Avatar>
        </div>
      </Preview>

      <SectionBreak />

      <SectionTitle>Fallback Initials</SectionTitle>
      <Preview>
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarFallback>CP</AvatarFallback>
          </Avatar>
        </div>
      </Preview>
    </>
  );
}
