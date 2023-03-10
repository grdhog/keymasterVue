// keyState  (UNASSIGNED, ASSIGNED, LOST, INVESTIGATING_LOSS, RETIRED),

export const testKeys = [
  {
    keySystem: 'ABC',
    keyRank: 'MK1',
    keyIssue: '4',
    keyState: 'UNASSIGNED',
    assignedPerson: null,
    assignedDate: null,
    assignmentExpiry: null,
    lastPossessionConfirmed: null,
  },
  {
    keySystem: 'ABC',
    keyRank: 'Slave',
    keyIssue: '99',
    keyState: 'UNASSIGNED',
    assignedPerson: null,
    assignedDate: null,
    assignmentExpiry: null,
    lastPossessionConfirmed: null,
  },
  {
    keySystem: 'DEF',
    keyRank: 'Slave',
    keyIssue: '22',
    keyState: 'UNASSIGNED',
    assignedPerson: null,
    assignedDate: null,
    assignmentExpiry: null,
    lastPossessionConfirmed: null,
  },
];

export const testUsers = [
  {
    firstName: 'Mark',
    lastName: 'Williams',
    email: 'mark.williams@poriruacity.govt.nz',
    phone: '555-5555',
    department: 'Property',
    company: null,
    isManager: false,
    isAdmin: true
  },
  {
    firstName: 'Andrew',
    lastName: 'Grant',
    email: 'andrew.grant@poriruacity.govt.nz',
    phone: '021882540',
    department: 'BTG',
    company: null,
    isManager: false,
    isAdmin: true
  },
  {
    firstName: 'Joe',
    lastName: 'Bloggs',
    email: 'joe.blogs@example.com',
    phone: '021882540',
    department: null,
    company: 'Example Compmany',
    isManager: false,
    isAdmin: false
  },
];
