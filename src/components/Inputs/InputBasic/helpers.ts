const crmMask = () => {
  return 'aa 000000';
};
const phoneMask = () => {
  return '(00) 90000-0000';
};
const yearMask = () => {
  return '0000';
};

export const masks = (type: string): string => {
  let mask = '';
  switch (type) {
    case 'crm':
      mask = crmMask();
      break;
    case 'year':
      mask = yearMask();
      break;
    case 'phone':
      mask = phoneMask();
      break;
  }
  return mask;
};

export default masks;
