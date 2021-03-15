import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export const ALL_ITEMS_COUNT_QUERY = gql`
  query ALL_ITEMS_COUNT_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
// eslint-disable-next-line react/prop-types
const Pagination = ({ page }) => {
  const intPage = parseInt(page);
  const { data, loading, error } = useQuery(ALL_ITEMS_COUNT_QUERY);
  if (loading) return <div />;
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Toyland - page {page}</title>
      </Head>
      <Link href={`/products/${intPage - 1}`}>
        <a aria-disabled={page <= 1}>Prev ⬅️</a>
      </Link>

      <p>Total items: {count}</p>
      <p>
        Page {page} from {pageCount}
      </p>
      <Link href={`/products/${intPage + 1}`}>
        <a aria-disabled={intPage === pageCount}>➡️ Next</a>
      </Link>
    </PaginationStyles>
  );
};
export default Pagination;
