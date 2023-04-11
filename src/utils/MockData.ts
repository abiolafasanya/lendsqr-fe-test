import { activeUser, user1, userWLoan, userWSaving, usersIcon } from "./images";

export const mockCredentials = {
    email: 'test@example.com',
    password: 'password'
}

export const mockLogin = async () => {
    return {
      userName: "recruiter@lendsqr.com",
      password: "lendsQrRecruiter",
    };
  };

  export const InfoCard = [
    {
      icon: usersIcon,
      textDescription: "Users",
      number: "2,453",
    },
    {
      icon: activeUser,
      textDescription: "Active Users",
      number: "2,453",
    },
    {
      icon: userWLoan,
      textDescription: "Users with Loans",
      number: "12,453",
    },
    {
      icon: userWSaving,
      textDescription: "Users with savings",
      number: "102,453",
    },
  ];