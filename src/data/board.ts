export type TList = { id: string; name: string };

export type TCard = { id: string; name: string };

export type TBoard = Record<
  string,
  {
    list: TList;
    cards: TCard[];
  }
>;

export const boardData: TBoard = {
  "e1614d1a-86a0-42c0-a356-262587365add": {
    list: { id: "e1614d1a-86a0-42c0-a356-262587365add", name: "Todo" },
    cards: [
      {
        id: "29a0cc59-b071-4a1f-89ed-cc05024703d4",
        name: "Board コンポーネント作成",
      },
      {
        id: "e4a2be9f-97c3-4d70-963a-f0d234f703cb",
        name: "Page コンポーネント作成",
      },
    ],
  },
  "8636b510-c8d9-4eba-b5e0-a2169dd395de": {
    list: { id: "8636b510-c8d9-4eba-b5e0-a2169dd395de", name: "進行中" },
    cards: [
      {
        id: "8acea93a-155a-491e-9899-a80acea27a34",
        name: "Card コンポーネント作成",
      },
    ],
  },
  "43f39ebf-a477-4486-b8cf-f02552aaf3be": {
    list: { id: "43f39ebf-a477-4486-b8cf-f02552aaf3b", name: "完了" },
    cards: [],
  },
};
