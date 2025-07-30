const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;

  if (['work', 'home', 'personal'].includes(contactType)) return contactType;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;
  if (value === 'true') return true;
  if (value === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  return {
    contactType: parseContactType(contactType),
    isFavourite: parseBoolean(isFavourite),
  };
};
