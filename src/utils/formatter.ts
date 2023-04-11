enum CURRENCY {
  NGN = 'NGN',
  USD = 'USD',
}

enum LOCALE {
  NG = 'en-NG',
  US = 'en-US',
}

const CURRENCY_FORMATTER = new Intl.NumberFormat(LOCALE.NG, {
  currency: CURRENCY.NGN,
  style: 'currency',
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}

export function formatDate(date: string): string {
  const parsedDate = Date.parse(date);
  if (isNaN(parsedDate)) {
    return 'Invalid Date';
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(parsedDate);

  return formattedDate;
}

const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};

export function formatPhoneNumber(phoneNumberString: string): string {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  return phoneNumberString;
}

export const userStatus = (date: string): string => {
  const parsedDate = Date.parse(date);
  const year = new Date(parsedDate).getFullYear();
  return year >= 2040
    ? 'Pending'
    : year <= 1999
    ? 'Blacklisted'
    : year >= 2000 && year <= 2010
    ? 'Inactive'
    : 'Active';
};

export const getStatuColor = (status: string) => {
  if (status === undefined || status === null) return '';
  const color =
    status === 'Pending'
      ? 'pending'
      : status === 'Inactive'
      ? 'inactive'
      : status === 'Blacklisted'
      ? 'blacklisted'
      : 'active';
  return color;
};

