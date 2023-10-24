export type ThreadType = {
  photoProfile: string;
  name: string;
  username: string;
  content: string;
  photoContent: string | null;
  totalLikes: number;
  totalReplies: number;
  createdAt: string;
};

export type SuggestedType = {
  photoProfile: string;
  name: string;
  username: string;
  followed: boolean;
};
