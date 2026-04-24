// Auto-generated content manifest for Ap Chemistry
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering"
  | "document_analysis" | "structure_draw";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  minQuestionCount: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "ap-chemistry",
  examName: "Ap Chemistry",
  totalQuestions: 2900,
  category: "k12_national",
  topics: [
  {
    id: "atomic-structure",
    domain: "atomic-structure",
    title: "Atomic Structure",
    icon: "⚛️",
    color: "#DC2626",
    questionTarget: 600,
    minQuestionCount: 600,
    activityTypes: ["multiple_choice"],
  },
  {
    id: "bonding",
    domain: "bonding",
    title: "Chemical Bonding",
    icon: "🔗",
    color: "#7C3AED",
    questionTarget: 500,
    minQuestionCount: 500,
    activityTypes: ["multiple_choice", "calculation"],
  },
  {
    id: "reactions",
    domain: "reactions",
    title: "Chemical Reactions",
    icon: "⚗️",
    color: "#059669",
    questionTarget: 600,
    minQuestionCount: 600,
    activityTypes: ["multiple_choice", "calculation"],
  },
  {
    id: "organic",
    domain: "organic",
    title: "Organic Chemistry",
    icon: "🧪",
    color: "#DC2626",
    questionTarget: 700,
    minQuestionCount: 700,
    activityTypes: ["multiple_choice", "structure_draw"],
  },
  {
    id: "physical",
    domain: "physical",
    title: "Physical Chemistry",
    icon: "🌡️",
    color: "#D97706",
    questionTarget: 500,
    minQuestionCount: 500,
    activityTypes: ["multiple_choice", "calculation"],
  }
  ],
};

