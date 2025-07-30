import { ContactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  userId,
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
}) => {
  const contactsQuery = ContactsCollection.find();

  if (filter.contactType)
    contactsQuery.where('contactType').equals(filter.contactType);

  if (filter.isFavourite)
    contactsQuery.where('isFavourite').equals(filter.isFavourite);

  if (userId) contactsQuery.where('userId').equals(userId);

  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery
    .skip((page - 1) * perPage)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (userId, contactId) => {
  return await ContactsCollection.findOne({ _id: contactId, userId });
};

export const createContact = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const updateContact = async (
  userId,
  contactId,
  payload,
  options = {},
) => {
  const updatedContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!updatedContact || !updatedContact.value) return null;

  return {
    contact: updatedContact.value,
    isNew: Boolean(updatedContact?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (userId, contactId) => {
  return await ContactsCollection.findOneAndDelete({ _id: contactId, userId });
};
