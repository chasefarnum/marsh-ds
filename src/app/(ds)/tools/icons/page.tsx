"use client";

import { useState, useCallback, type ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { PageHeader } from "@/components/ds/page-header";
import { type IconBaseProps } from "react-icons";
import {
  BiArrowBack,
  BiArrowToRight,
  BiUpArrowAlt,
  BiDownArrowAlt,
  BiLinkExternal,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
  BiNavigation,
  BiHome,
  BiLogIn,
  BiLogOut,
  BiPlus,
  BiPlusCircle,
  BiMinus,
  BiX,
  BiXCircle,
  BiCheck,
  BiCheckCircle,
  BiCopy,
  BiDownload,
  BiUpload,
  BiTrash,
  BiPencil,
  BiEdit,
  BiSearch,
  BiFilter,
  BiSortUp,
  BiSortDown,
  BiSlider,
  BiShareAlt,
  BiLink,
  BiRefresh,
  BiDotsHorizontalRounded,
  BiDotsVerticalRounded,
  BiMenu,
  BiSend,
  BiInfoCircle,
  BiError,
  BiErrorCircle,
  BiQuestionMark,
  BiBoltCircle,
  BiCloudLightning,
  BiStar,
  BiTrendingUp,
  BiFlag,
  BiFile,
  BiFileBlank,
  BiFolder,
  BiFolderOpen,
  BiImage,
  BiNote,
  BiBookOpen,
  BiBookmark,
  BiHash,
  BiPurchaseTag,
  BiChat,
  BiMessageRounded,
  BiEnvelope,
  BiBell,
  BiPhone,
  BiUser,
  BiUserCircle,
  BiGroup,
  BiCart,
  BiCreditCard,
  BiReceipt,
  BiCrown,
  BiRestaurant,
  BiHeart,
  BiMap,
  BiCalendar,
  BiCalendarAlt,
  BiTime,
  BiTimer,
  BiCamera,
  BiGlobe,
  BiBarChartAlt2,
  BiLineChart,
  BiLock,
  BiKey,
  BiShieldAlt2,
  BiShow,
  BiHide,
  BiFingerprint,
  BiSun,
  BiMoon,
  BiCog,
} from "react-icons/bi";

type IconEntry = {
  name: string;
  component: ComponentType<IconBaseProps>;
  category: string;
};

const ICONS: IconEntry[] = [
  // Navigation
  { name: "ArrowBack", component: BiArrowBack, category: "Navigation" },
  { name: "ArrowToRight", component: BiArrowToRight, category: "Navigation" },
  { name: "UpArrow", component: BiUpArrowAlt, category: "Navigation" },
  { name: "DownArrow", component: BiDownArrowAlt, category: "Navigation" },
  { name: "LinkExternal", component: BiLinkExternal, category: "Navigation" },
  { name: "ChevronDown", component: BiChevronDown, category: "Navigation" },
  { name: "ChevronLeft", component: BiChevronLeft, category: "Navigation" },
  { name: "ChevronRight", component: BiChevronRight, category: "Navigation" },
  { name: "ChevronUp", component: BiChevronUp, category: "Navigation" },
  { name: "Navigation", component: BiNavigation, category: "Navigation" },
  { name: "Home", component: BiHome, category: "Navigation" },
  { name: "LogIn", component: BiLogIn, category: "Navigation" },
  { name: "LogOut", component: BiLogOut, category: "Navigation" },

  // Actions
  { name: "Plus", component: BiPlus, category: "Actions" },
  { name: "PlusCircle", component: BiPlusCircle, category: "Actions" },
  { name: "Minus", component: BiMinus, category: "Actions" },
  { name: "X", component: BiX, category: "Actions" },
  { name: "XCircle", component: BiXCircle, category: "Actions" },
  { name: "Check", component: BiCheck, category: "Actions" },
  { name: "CheckCircle", component: BiCheckCircle, category: "Actions" },
  { name: "Copy", component: BiCopy, category: "Actions" },
  { name: "Download", component: BiDownload, category: "Actions" },
  { name: "Upload", component: BiUpload, category: "Actions" },
  { name: "Trash", component: BiTrash, category: "Actions" },
  { name: "Pencil", component: BiPencil, category: "Actions" },
  { name: "Edit", component: BiEdit, category: "Actions" },
  { name: "Search", component: BiSearch, category: "Actions" },
  { name: "Filter", component: BiFilter, category: "Actions" },
  { name: "SortUp", component: BiSortUp, category: "Actions" },
  { name: "SortDown", component: BiSortDown, category: "Actions" },
  { name: "Slider", component: BiSlider, category: "Actions" },
  { name: "Share", component: BiShareAlt, category: "Actions" },
  { name: "Link", component: BiLink, category: "Actions" },
  { name: "Refresh", component: BiRefresh, category: "Actions" },
  { name: "DotsHorizontal", component: BiDotsHorizontalRounded, category: "Actions" },
  { name: "DotsVertical", component: BiDotsVerticalRounded, category: "Actions" },
  { name: "Menu", component: BiMenu, category: "Actions" },
  { name: "Send", component: BiSend, category: "Actions" },

  // Status
  { name: "Info", component: BiInfoCircle, category: "Status" },
  { name: "Warning", component: BiError, category: "Status" },
  { name: "Error", component: BiErrorCircle, category: "Status" },
  { name: "Question", component: BiQuestionMark, category: "Status" },
  { name: "BoltCircle", component: BiBoltCircle, category: "Status" },
  { name: "Lightning", component: BiCloudLightning, category: "Status" },
  { name: "Star", component: BiStar, category: "Status" },
  { name: "TrendUp", component: BiTrendingUp, category: "Status" },
  { name: "Flag", component: BiFlag, category: "Status" },

  // Content
  { name: "File", component: BiFile, category: "Content" },
  { name: "FileBlank", component: BiFileBlank, category: "Content" },
  { name: "Folder", component: BiFolder, category: "Content" },
  { name: "FolderOpen", component: BiFolderOpen, category: "Content" },
  { name: "Image", component: BiImage, category: "Content" },
  { name: "Note", component: BiNote, category: "Content" },
  { name: "BookOpen", component: BiBookOpen, category: "Content" },
  { name: "Bookmark", component: BiBookmark, category: "Content" },
  { name: "Hash", component: BiHash, category: "Content" },
  { name: "Tag", component: BiPurchaseTag, category: "Content" },

  // Communication
  { name: "Chat", component: BiChat, category: "Communication" },
  { name: "Message", component: BiMessageRounded, category: "Communication" },
  { name: "Envelope", component: BiEnvelope, category: "Communication" },
  { name: "Bell", component: BiBell, category: "Communication" },
  { name: "Phone", component: BiPhone, category: "Communication" },

  // User
  { name: "User", component: BiUser, category: "User" },
  { name: "UserCircle", component: BiUserCircle, category: "User" },
  { name: "Users", component: BiGroup, category: "User" },

  // Commerce
  { name: "Cart", component: BiCart, category: "Commerce" },
  { name: "CreditCard", component: BiCreditCard, category: "Commerce" },
  { name: "Receipt", component: BiReceipt, category: "Commerce" },
  { name: "Crown", component: BiCrown, category: "Commerce" },

  // [Brand Name]
  { name: "Restaurant", component: BiRestaurant, category: "[Brand Name]" },
  { name: "Heart", component: BiHeart, category: "[Brand Name]" },
  { name: "Map", component: BiMap, category: "[Brand Name]" },
  { name: "Calendar", component: BiCalendar, category: "[Brand Name]" },
  { name: "CalendarAlt", component: BiCalendarAlt, category: "[Brand Name]" },
  { name: "Time", component: BiTime, category: "[Brand Name]" },
  { name: "Timer", component: BiTimer, category: "[Brand Name]" },
  { name: "Camera", component: BiCamera, category: "[Brand Name]" },
  { name: "Globe", component: BiGlobe, category: "[Brand Name]" },
  { name: "BarChart", component: BiBarChartAlt2, category: "[Brand Name]" },
  { name: "LineChart", component: BiLineChart, category: "[Brand Name]" },

  // Security
  { name: "Lock", component: BiLock, category: "Security" },
  { name: "Key", component: BiKey, category: "Security" },
  { name: "Shield", component: BiShieldAlt2, category: "Security" },
  { name: "Eye", component: BiShow, category: "Security" },
  { name: "EyeOff", component: BiHide, category: "Security" },
  { name: "Fingerprint", component: BiFingerprint, category: "Security" },

  // Theme
  { name: "Sun", component: BiSun, category: "Theme" },
  { name: "Moon", component: BiMoon, category: "Theme" },
  { name: "Gear", component: BiCog, category: "Theme" },
];

function IconTile({ icon, size }: { icon: IconEntry; size: number }) {
  const [copied, setCopied] = useState(false);
  const Icon = icon.component;

  const handleCopy = useCallback(() => {
    const raw = renderToStaticMarkup(<Icon size={size} />);
    const svg = raw.replace("<svg", `<svg id="${icon.name}"`);
    navigator.clipboard.writeText(svg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [Icon, icon.name, size]);

  return (
    <button
      onClick={handleCopy}
      className="group flex cursor-pointer flex-col items-center gap-2 rounded-md border border-transparent p-3 transition-colors hover:border-border/40 hover:bg-muted/50"
      title={`Copy ${icon.name} SVG (${size}px)`}
    >
      <div className="flex h-10 w-10 items-center justify-center">
        {copied ? (
          <BiCheck size={size} className="text-success" />
        ) : (
          <Icon size={size} className="text-foreground" />
        )}
      </div>
      <span className="text-[11px] text-muted-foreground group-hover:text-foreground">
        {copied ? "Copied!" : icon.name}
      </span>
    </button>
  );
}

export default function IconsPage() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState<16 | 20>(20);

  const filtered = ICONS.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(filtered.map((i) => i.category))];

  return (
    <>
      <PageHeader
        title="Icons"
        description="Boxicons (Regular) used across the [Brand Name] design system. Click any icon to copy its SVG."
      />

      <div className="mb-8 flex gap-3">
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 flex-1 rounded-lg border border-input bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <div className="flex h-12 items-center rounded-lg border border-input">
          <button
            onClick={() => setSize(16)}
            className={`h-full cursor-pointer rounded-l-lg px-3 py-2 text-sm font-medium transition-colors ${
              size === 16
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            16px
          </button>
          <button
            onClick={() => setSize(20)}
            className={`h-full cursor-pointer rounded-r-lg px-3 py-2 text-sm font-medium transition-colors ${
              size === 20
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            20px
          </button>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">
            {category}
          </h3>
          <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {filtered
              .filter((i) => i.category === category)
              .map((icon) => (
                <IconTile key={icon.name} icon={icon} size={size} />
              ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No icons found for &ldquo;{search}&rdquo;
        </p>
      )}
    </>
  );
}
