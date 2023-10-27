export type ThreadsType = {
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

export type ThreadDetailType = {
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
  replies: [
    {
      id: string;
      content: string;
      image: string | null;
      created_at: string;
      updated_at: string;
    }
  ];
};















































export type SuggestedType = {
  photoProfile: string;
  name: string;
  username: string;
  followed: boolean;
};
