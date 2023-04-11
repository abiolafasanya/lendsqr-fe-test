import { formatCurrency } from './formatter';
import { IUser, PersonalInfo } from './types';

export const personalInfo: PersonalInfo | any = (user: IUser) => {
  const data = {
    Fullname: user?.profile?.firstName + ' ' + user?.profile?.lastName,
    'Phone Number': user.phoneNumber,
    'Email Address': user.email,
    BVN: user.profile?.bvn,
    Gender: user.profile?.gender,
    'Marital Status': 'Single',
    Children: 'none',
    'Type of Residence': user.profile?.address,
  };
  return data;
};

export const educationAndEmployment = (user: IUser) => {
  const data = {
    'level of education': user.education?.level,
    'employment status': user.education?.employmentStatus,
    'sector of employment': user.education?.sector,
    'duration of employment': user.education?.duration,
    'office email': user.education?.officeEmail,
    'monthly income':
      typeof user.education?.monthlyIncome !== undefined &&
      formatCurrency(parseInt(user?.education?.monthlyIncome[0] as string)) +
        ' - ' +
        formatCurrency(parseInt(user?.education?.monthlyIncome[1] as string)),
    'Loan repayment': parseInt(user?.education?.loanRepayment as string) * 100,
  };
  return data;
};

export const social = (user: IUser) => {
  const data = {
    twitter: user?.socials?.twitter,
    facebook: user?.socials?.facebook,
    instagram: user?.socials?.instagram,
  };
  return data;
};

export const guarantor = (user: IUser) => {
  const data = {
    fullname: user?.guarantor?.firstName + ' ' + user?.guarantor?.lastName,
    'phone number': user?.guarantor?.phoneNumber,
    address: user?.guarantor?.address,
    relationship: user?.guarantor?.gender === 'Male' ? `Brother` : `Sister`,
  };
  return data;
};
