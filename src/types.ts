export type ProgramCategory = "Cursos" | "Talleres" | "Diplomados" | "Seminarios" | "Empresas";

export interface Program {
  id: string;
  category: ProgramCategory;
  title: string;
  shortDescription: string;
  description: string;
  duration: string; // e.g., "120 horas"
  modality: "Presencial" | "Virtual" | "Híbrida";
  price: number; // 0 for free
  isFree: boolean;
  isFeatured?: boolean;
  image: string;
  objectives: string[];
  modules: string[];
  instructor: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
}

export interface LoanApplication {
  id: string;
  fullName: string;
  docId: string;
  email: string;
  phone: string;
  programId: string;
  programTitle: string;
  amount: number;
  installments: number;
  monthlyPayment: number;
  interestRate: number;
  status: "Pendiente" | "Aprobado" | "Pre-Aprobado" | "Rechazado";
  date: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export interface Partner {
  id: string;
  name: string;
  logoText: string;
  logoBg: string;
  description: string;
  benefits: string;
  website: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  quote: string;
  image: string;
  rating: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  modality: string;
  linkText: string;
}

// Campus Virtual Interactive State
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  content: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface ActiveCourseState {
  id: string;
  title: string;
  progress: number; // 0 to 100
  lessons: Lesson[];
  quiz: QuizQuestion[];
  quizCompleted: boolean;
  quizScore?: number;
  certified: boolean;
}
