export interface IUser {
    id: string,
    createdAt: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string,  
    accountBalance: string,
    accountNumber: string,
    profile?: profile,
    education?: education,
    socials?: socials,
    guarantor?: guarantor,
};

type profile = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    avatar: string
    gender: string,
    bvn: string,
    address: string,
    currency: string,
  }

type guarantor = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: string,
    address: string,
  }

type socials = {
    facebook: string,
    instagram: string,
    twitter: string,
  }

type  education ={
    level: string,
    employmentStatus: string,
    sector: string,
    duration: string,
    officeEmail: string,
    monthlyIncome: Array<string>,
    loanRepayment: string,
  }

  enum Status {
    active,
    pending,
    inactive,
    blacklisted,
  }

export type user = {
  organization: string;
  username: string;
  email: string;
  phone: string | number;
  date: Date | string;
  status: Status | string;
}

export type PersonalInfo = {
  Fullname: string;
  'Phone Number': string;
  'Email Address': string;
  BVN?: string;
  Gender?: string;
  'Marital Status': string;
  Children: string;
  'Type of Residence'?: string;
};