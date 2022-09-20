import { utilService } from './services/util.service'

//prettier-ignore
export var board = {
  _id: 'b101',
  title: 'Demo Data',
  archivedAt: 1589983468418,
  createdAt: 1589983468418,
  isStarred: true,
  createdBy: {
    _id: 'u101',
    fullname: 'Abi Abambi',
    imgUrl: 'http://some-img',
  },
  style: {
    background:
      'url("https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-1150039017.jpg?w=1390&crop=1")',
    isLabelsLarge: false,
  },
  labels: [
    {
      id: 'l101',
      title: 'Done',
      color: 'green',
      class: 'green-hoverable',
    },
    {
      id: 'l102',
      title: 'Progress',
      color: 'yellow',
      class: 'yellow-hoverable',
    },
    {
      id: 'l103',
      title: 'Todo',
      color: 'orange',
      class: 'orange-hoverable',
    },
    {
      id: 'l104',
      title: 'Todo',
      color: 'red',
      class: 'red-hoverable',
    },
    {
      id: 'l105',
      title: 'Later',
      color: 'purple',
      class: 'purple-hoverable',
    },
    {
      id: 'l106',
      title: 'Important',
      color: 'blue',
      class: 'blue-hoverable',
    },
  ],
  members: [
    {
      _id: 'u101',
      fullname: 'Bar Ohayon',
      imgUrl:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/42763932_10212194299428669_1889538263073423360_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2dDzoFKxPc8AX_yKobY&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT9asrzvxAlB9bFB3_A8dtuDp_c_JepsgXU3YVfnrFwc0g&oe=634CA39C',
    },
    {
      _id: 'u102',
      fullname: 'Yasmin Gudha',
      imgUrl:
        'https://res.cloudinary.com/frello/image/upload/v1663581895/hx94mf1jqzol7neds3yj.jpg',
    },
    {
      _id: 'u103',
      fullname: 'Lee Sharon',
      imgUrl: 'https://scontent.ftlv23-1.fna.fbcdn.net/v/t31.18172-8/20157447_10155321973701047_7503367269692251994_o.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=-Xl-yuhb17QAX9mVafE&_nc_oc=AQmk7_yu3aK9zXZJ1L2aG8YCukN9dwOc_yxOdHSAcS6HsFNwBF-RsmA8IpM3BEEjx0Y&tn=qaqignt_wEc5HEq3&_nc_ht=scontent.ftlv23-1.fna&oh=00_AT8CayO-5d2vib8idTkvG-05B_NHSmRMZxjPk3kEAubWCA&oe=634D2378',
    },
  ],
  groups: [
    {
      id: 'g101',
      title: 'Backlog-Server',
      archivedAt: 1589983468418,
      tasks: [
        {
          id: 'c101',
          title: 'Create a server with express',
          attachments: [],
          style: {
            bgColor: '#FFAF3F',
          },
          memberIds: ['u101'],
          checklists: [{
            "id": "YEhmF",
            "title": "Checklist",
            "todos": [
              {
                "id": "212jX",
                "title": "To Do 1",
                "isDone": false
              }
            ]
          }, {
            "id": "YEhmF2",
            "title": "sas",
            "todos": [
              {
                "id": "2123X",
                "title": "To Do 2",
                "isDone": true
              }
            ]
          }]
        },
        {
          id: 'c102',
          title: 'Create backend services',
          attachments: [],
          style: {
            bgColor: '#EF7664',
          },
          memberIds: ['u102'],
        },
        {
          id: 'c103',
          title: 'Open routing directory',
          attachments: [],
        },
        {
          id: 'c104',
          title: 'Data model approval',
          attachments: [{ id: 'aa101', name: 'Attachment Image', createdAt: Date.now(), url: "https://images.unsplash.com/photo-1526253038957-bce54e05968e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }],
          style: { coverImg: "https://images.unsplash.com/photo-1526253038957-bce54e05968e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }
        },
        {
          id: 'c105',
          title: 'Database implementation',
          attachments: [],
        },
      ],
      style: {},
    },
    {
      id: 'g102',
      title: 'Backlog-Client',
      tasks: [
        {
          id: "c09",
          title: 'Planning the component tree and folder structure',
          archivedAt: 1589983468418,
          attachments: [],
        },
        {
          id: 'c1002',
          title: 'Create front services',
          status: 'in-progress',
          description: 'description',
          attachments: [
            {
              id: 'aa101',
              name: 'Attachment Image',
              createdAt: Date.now(),
              url: 'https://trello.com/1/cards/6321cbc1e641a404ee3f1eb6/attachments/6321cd334f784b036ea3c662/download/images.jpeg',
            },
          ],
          comments: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          checklists: [
            {
              id: 'YEhmF',
              title: 'Checklist',
              todos: [
                {
                  id: '212jX',
                  title: 'To Do 1',
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ['u101'],
          labelIds: ['l101', 'l102'],
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
          style: {
            coverImg: 'https://trello.com/1/cards/6321cbc1e641a404ee3f1eb6/attachments/6321cd334f784b036ea3c662/download/images.jpeg'
          },
        },
        {
          id: 't1003',
          title: 'Build basic CRUD',
          archivedAt: 1589983468418,
          attachments: [],
          memberIds: ['u102'],
        },
      ],
      style: {},
    },
    {
      id: 'g103',
      title: 'In development',
      tasks: [
        {
          id: "a889a",
          title: 'Sanity test for new component',
          archivedAt: 1589983468418,
          attachments: [],
          memberIds: ['u103'],
        },
        {
          id: 'c2',
          title: 'functional testing for app header',
          status: 'in-progress',
          description: 'description',
          attachments: [],
          comments: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          checklists: [
            {
              id: 'YEhmF',
              title: 'Checklist',
              todos: [
                {
                  id: '212jX',
                  title: 'To Do 1',
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ['u101'],
          labelIds: ['l101', 'l102'],
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
          style: {
            bgColor: '#F5DE29',
          },
        },
        {
          id: 'c3',
          title: 'connecting to PWA',
          status: 'in-progress',
          description: 'description',
          attachments: [{ id: 'aa10122', name: 'Attachment Image', createdAt: Date.now(), url: "https://sevaa.com/app/uploads/2018/09/featured-image-PWA.png" }],
          comments: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          checklists: [
            {
              id: 'YEhmF',
              title: 'Checklist',
              todos: [
                {
                  id: '212jX',
                  title: 'To Do 1',
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ['u101'],
          labelIds: ['l101', 'l102'],
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
          style: {
            coverImg: "https://sevaa.com/app/uploads/2018/09/featured-image-PWA.png"
          },
        },
      ],
      style: {
        bgColor: '#CC0200',
      },
    },
    {
      id: 'g104',
      title: 'Done',
      tasks: [
        {
          id: "a0o98",
          title: 'SASS architecture',
          archivedAt: 1589983468418,
          attachments: [],
        },
        {
          id: 'c22',
          title: 'https://www.npmjs.com/package/react-beautiful-dnd',
          status: 'in-progress',
          description: 'description',
          comments: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          checklists: [
            {
              id: 'YEhmF',
              title: 'Checklist',
              todos: [
                {
                  id: '212jX',
                  title: 'To Do 1',
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ['u101'],
          labelIds: ['l101', 'l102'],
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
          style: {
            bgColor: '#26de81',
          },
        },
        {
          id: "a1l3A",
          title: 'Add node.js modules',
          archivedAt: 1589983468418,
          attachments: [{ id: 'aa101', name: 'Attachment Image', createdAt: Date.now(), url: "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" }],
          style: { coverImg: 'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png' }
        },
      ],
      style: {},
    },
    {
      id: 'g105',
      title: 'QA',
      tasks: [
        {
          id: 'tt1',
          title: 'Meeting with head manager for planning the code progress',
          archivedAt: 1589983468418,
          attachments: [],
          style: {
            bgColor: '#172A4D',
          },
        },
        {
          id: 'ttt2',
          title: 'Bug search',
          description: 'description',
          attachments: [{ id: 'bb102', name: 'Attachment Image', createdAt: Date.now(), url: "https://st2.depositphotos.com/47577860/45954/v/1600/depositphotos_459542140-stock-illustration-bug-bug-search-development-icon.jpg" }],
          style: { coverImg: 'https://st2.depositphotos.com/47577860/45954/v/1600/depositphotos_459542140-stock-illustration-bug-bug-search-development-icon.jpg' },
          comments: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          checklists: [
            {
              id: 'YEhmF',
              title: 'Checklist',
              todos: [
                {
                  id: '212jX',
                  title: 'To Do 1',
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ['u101'],
          labelIds: ['l101', 'l102'],
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
        },
        {
          id: 'ttt3',
          title: 'End day CR wihh devs and team leader',
          archivedAt: 1589983468418,
          attachments: [],
          style: {
            bgColor: '#CD8DE5',
          },
        },
        {
          id: 'tt4',
          title: 'Automation tests',
          archivedAt: 1589983468418,
          attachments: [],
        },
      ],
      style: {},
    },
    {
      id: 'g106',
      title: 'Ready for production',
      tasks: [
        {
          id: "a09L2h",
          title: 'Create a database with mongo',
          archivedAt: 1589983468418,
          attachments: [],
        },
        {
          id: 'tt2',
          title: 'Finish making more customization options',
          status: 'in-progress',
          description: 'description',
          attachments: [],
          comments: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          checklists: [
            {
              id: 'YEhmF',
              title: 'Checklist',
              todos: [
                {
                  id: '212jX',
                  title: 'To Do 1',
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ['u101'],
          labelIds: ['l101', 'l102'],
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
          style: {
            bgColor: '#26de81',
          },
        },
        {
          id: 'tt3',
          title: 'Make a login system',
          archivedAt: 1589983468418,
          attachments: [],
        },
      ],
      style: {},
    },
  ],
  activities: [],
  style: {
    background: 'https://images.unsplash.com/photo-1660551772352-0855c10356b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    backgroundColor: 'pink'
  }
}
