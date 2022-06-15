
import { useRoute, useRouter } from '@nuxtjs/composition-api';

const nonFilters = new Set(['sort', 'term', 'itemsPerPage']);

const reduceFilters = (query) => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.has(curr);

  return {
    ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]]
  };
};

// eslint-disable-next-line
const useUiHelpers = () => {
  const route = useRoute();
  const router = useRouter();
  const { query } = route.value;

  const getFiltersDataFromUrl = (onlyFilters) => Object.keys(query)
    .filter((f) => (onlyFilters ? !nonFilters.has(f) : nonFilters.has(f)))
    .reduce(reduceFilters(query), {});

  const getFacetsFromURL = () => {
    return {
      filters: getFiltersDataFromUrl(true),
      sort: query.sort as string || '',
      itemsPerPage: Number.parseInt(query.itemsPerPage as string, 10) || 20,
      page: Number.parseInt(query.page as string, 10) || 1
    };
  };

  // eslint-disable-next-line
  const getCatLink = (category): string => {
    console.warn('[VSF] please implement useUiHelpers.getCatLink.');

    return '/';
  };

  // eslint-disable-next-line
  const changeSorting = async (sort: string) => {
    await router.push({ query: { ...query, sort } });
  };

  // eslint-disable-next-line
  const changeFilters = async (filters: any, onlyFilters: boolean = true) => {
    await router.push({
      query: {
        ...getFiltersDataFromUrl(onlyFilters),
        ...filters
      }
    });
  };

  // eslint-disable-next-line
  const changeItemsPerPage = async (itemsPerPage) => {
    await router.push({ query: { ...query, itemsPerPage } });
  };

  // eslint-disable-next-line
  const setTermForUrl = (term: string) => {
    console.warn('[VSF] please implement useUiHelpers.changeSearchTerm.');
  };

  // eslint-disable-next-line
  const isFacetColor = (facet: any): boolean => facet.id === 'pa_colour' || facet.id === 'pa_color';

  // eslint-disable-next-line
  const isFacetCheckbox = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetCheckbox.');

    return false;
  };

  const getSearchTermFromUrl = () => {
    console.warn('[VSF] please implement useUiHelpers.getSearchTermFromUrl.');
  };

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    setTermForUrl,
    isFacetColor,
    isFacetCheckbox,
    getSearchTermFromUrl
  };
};

export default useUiHelpers;
