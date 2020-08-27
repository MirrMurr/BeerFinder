import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from 'store/pagination'

export const usePagination = () => {
  const itemsPerPage = useSelector(state => state.pagination.itemsPerPage)
  const totalItems = useSelector(state => state.pagination.totalItems)
  const currentPage = useSelector(state => state.pagination.currentPage)
  const pageNumbers = Array.from(Array(Math.ceil(totalItems / itemsPerPage)), (_, i) => i + 1)

  const dispatch = useDispatch()

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }

  return { paginate, currentPage, pageNumbers }
}
