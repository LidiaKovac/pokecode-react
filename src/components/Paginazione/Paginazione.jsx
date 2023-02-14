import { Pagination } from "react-bootstrap"
export const Paginazione = ({ next, previous, changePage }) => {
  return (
    <>
      <Pagination>
        <Pagination.Prev onClick={()=> changePage(previous)} />

        <Pagination.Next onClick={()=> changePage(next)} />
      </Pagination>
    </>
  )
}
