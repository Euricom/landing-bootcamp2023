type JsonId = "peter-cosemans" | "stijn-menu";

export interface BootcamperDetailProps {
  jsonId: JsonId;
  shortlisted: boolean;
  isDark?: boolean;
  onToggle: (id: number, value: boolean) => void;
}

export interface BootcamperOverviewProps {
  jsonId: JsonId;
}
