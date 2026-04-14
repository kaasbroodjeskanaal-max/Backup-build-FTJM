export interface Message {
  id: string;
  created_at: string;
  content: string;
  user_id: string;
  user_email: string;
}

export interface UserProfile {
  id: string;
  email: string;
}
