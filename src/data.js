const data = [
  {
    id: 1,
    mainReason: "Class completed",
    subReasons: [],
  },
  {
    id: 2,
    mainReason: "Class interrupted/aborted",
    subReasons: [
      {
        id: 1,
        reason: "Student didn't show up for the class.",
      },
      {
        id: 2,
        reason: "Student didn't show any interest.",
      },
      {
        id: 3,
        reason: "Student got disconnected.",
      },
      {
        id: 4,
        reason: "I got disconneted.",
      },
      {
        id: 5,
        reason: "Other reason.",
      },
    ],
  },
];

export default data;
