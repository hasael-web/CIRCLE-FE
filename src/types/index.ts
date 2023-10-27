export type ThreadHomeType = {
  id: string;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    username: string;
    fullname: string;
    profile_picture: string;
  };
  likes: number;
  replies: number;
};

export type ThreadPostType = {
  content: string;
  image?: string;
};
