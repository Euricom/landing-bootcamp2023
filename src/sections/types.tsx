type JsonId =
  | "bjorn-felix"
  | "kobe-brants"
  | "kobe-dehandschutter"
  | "liese-cordeyn"
  | "maarten-salien"
  | "toon-van-hoye";

export interface BootcamperDetailProps {
  jsonId: JsonId;
  shortlisted: boolean;
  isDark?: boolean;
  onToggle: (id: number, value: boolean) => void;
}

export interface BootcamperOverviewProps {
  jsonId: JsonId;
}
