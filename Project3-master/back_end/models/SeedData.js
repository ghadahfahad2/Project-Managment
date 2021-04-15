const usersData = [
  {
    userName: "bushra",
    email: "bushra.1416@hotmail.com",
    password: "123123",
  },
  {
    userName: "ashwaq",
    email: "ashwaq@hotmail.com",
    password: "123123",
  },
  {
    userName: "ghadah",
    email: "ghadah@hotmail.com",
    password: "123123",
  },
  {
    userName: "fatemah",
    email: "fatemah@hotmail.com",
    password: "123123",
  },
  {
    userName: "jaber",
    email: "jaber@hotmail.com",
    password: "123123",
  },
  {
    userName: "jouza",
    email: "jouza@hotmail.com",
    password: "123123",
  },
  {
    userName: "salem",
    email: "salem@hotmail.com",
    password: "123123",
  },
  {
    userName: "salwa",
    email: "salwa@hotmail.com",
    password: "123123",
  },
  {
    userName: "Najed",
    email: "Najed@hotmail.com",
    password: "123123",
  },
];
const projectsData = [
  {
    title: "project 1",
    members: [
      {
        userId: "60115b690ba0311c388c9aa8",
        role: "manager",
      },
      {
        userId: "60115b690ba0311c388c9aa7",
      },
      {
        userId: "60115b690ba0311c388c9aa6",
      },
      {
        userId: "60115b690ba0311c388c9aa5",
      },
    ],
    startDate: Date.now(),
    endDate: "2021-02-25",
  },
  {
    title: "project 2",
    members: [
      {
        userId: "60115b690ba0311c388c9aa7",
        role: "manager",
      },
      {
        userId: "60115b690ba0311c388c9aa8",
      },
      {
        userId: "60115b690ba0311c388c9aa5",
      },
    ],
    startDate: Date.now(),
    endDate: "2021-02-25",
  },
  {
    title: "project 2",
    members: [
      {
        userId: "60115b690ba0311c388c9aa8",
        role: "manager",
      },
    ],
    startDate: Date.now(),
    endDate: "2021-02-25",
  },
];

const oneProject = {
  title: "ashwag",
  members: [
    {
      userId: "60115b690ba0311c388c9aa8",
      role: "manager",
    },
  ],
  startDate: Date.now(),
  endDate: "2021-02-25",
};

const user = [
  {
    userName: "njooud",
    email: "njooud@hotmail.com",
    password: "123123",
  },
];
const TasksData = [
  {
    title: "task 1",
    projectId: "6012b20254cb2f31685b14a8",
    userId: "6012b20254cb2f31685b14a9",
    status: false,
  },
  {
    title: "task 12",
    projectId: "6012b20254cb2f31685b14a8",
    userId: "6012b20254cb2f31685b14a9",
    status: false,
  },
  {
    title: "task 2",
    projectId: "6012b20254cb2f31685b14a8",
    userId: "60115b690ba0311c388c9aa8",
    status: false,
  },
];
module.exports = { usersData, projectsData, oneProject, user, TasksData };
