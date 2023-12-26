import { v4 as uuidv4 } from "uuid";

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
    list: { id: "e1614d1a-86a0-42c0-a356-262587365add", name: "list-1" },
    cards: [
      { id: "29a0cc59-b071-4a1f-89ed-cc05024703d4", name: "list1-Task1" },
      { id: "e4a2be9f-97c3-4d70-963a-f0d234f703cb", name: "list1-Task2" },
      { id: "f8de3383-2956-46d0-ad8f-334d8441f226", name: "list1-Task3" },
    ],
  },
  "8636b510-c8d9-4eba-b5e0-a2169dd395de": {
    list: { id: "8636b510-c8d9-4eba-b5e0-a2169dd395de", name: "list-2" },
    cards: [
      { id: "8acea93a-155a-491e-9899-a80acea27a34", name: "list2-Task1" },
      { id: "96971f23-168e-470f-a1b1-dfd29738d7c7", name: "list2-Task2" },
      { id: "316d29d0-85fc-4865-88e0-bfe565169eea", name: "list2-Task3" },
    ],
  },
  "43f39ebf-a477-4486-b8cf-f02552aaf3be": {
    list: { id: "43f39ebf-a477-4486-b8cf-f02552aaf3b", name: "list-3" },
    cards: [
      { id: "197e8511-90b9-47f0-b336-489767744f97", name: "list3-Task1" },
      { id: "8a7a07c9-e7de-4965-8f82-4dadbb6ab587", name: "list3-Task2" },
      { id: "9a4a914b-09c7-4eec-aeac-bf27cc64f59e", name: "list3-Task3" },
    ],
  },
};
