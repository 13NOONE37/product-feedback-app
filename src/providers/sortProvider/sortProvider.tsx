import { DropdownOption } from '@/types/dropdownOption';
import { createContext, Dispatch, SetStateAction } from 'react';

export const SORT = {
  OPTIONS: {
    UPVOTES_DESC: { value: 'upvotes-desc', label: 'Most Upvotes' },
    UPVOTES_ASC: { value: 'upvotes-asc', label: 'Least Upvotes' },
    COMMENTS_DESC: { value: 'comments-desc', label: 'Most Comments' },
    COMMENTS_ASC: { value: 'comments-asc', label: 'Least Comments' },
  },
  PARAM: 'sortBy',
} as const;

const SortContext = createContext<{
  sortBy: DropdownOption;
  setSortBy: Dispatch<SetStateAction<DropdownOption>>;
}>({
  sortBy: SORT.OPTIONS.UPVOTES_DESC,
  setSortBy: () => {},
});
export default SortContext;
