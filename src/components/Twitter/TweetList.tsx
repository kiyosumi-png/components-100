import { useEffect, useState } from "react";

type Tweet = {
  user: {
    name: string;
  };
  content: string;
  image?: string;
  // ...
};

type Props = {
  tweets: Tweet[];
};

export const TweetList = ({ tweets }: Props) => {
  return (
    <ul>
      {tweets.map(({ user, content }) => (
        <li>
          <p>{user.name}</p>
          <p>{content}</p>
          {/* View の中身が続く ... */}
        </li>
      ))}
    </ul>
  );
};

const useRecommendTweetList = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchRecommendTweets = async () => {
      return [
        {
          user: {
            name: "できたてほやほやエンジニア",
          },
          content: "Container/Presentational Pattern のメリットって何？",
        },
      ];
    };

    fetchRecommendTweets().then(setTweets);
  }, []);

  return { tweets };
};

const RecommendTweetList = () => {
  const { tweets } = useRecommendTweetList();

  return (
    <ul>
      {tweets.map(({ user, content }) => (
        <li>
          <p>{user.name}</p>
          <p>{content}</p>
          {/* View の中身が続く ... */}
        </li>
      ))}
    </ul>
  );
};

const UserTweetList = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchUserTweets = async () => {
      return [
        {
          user: {
            name: "できたてほやほやエンジニア",
          },
          content: "Container/Presentational Pattern のメリットって何？",
        },
      ];
    };

    fetchUserTweets().then(setTweets);
  }, []);

  return <TweetList tweets={tweets} />;
};
