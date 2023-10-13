import { useEffect, useState } from "react"
import { Pagination, Form } from "react-bootstrap"
import "./Paginazione.scss"
export const Paginazione = ({ changePage }) => {
  const [page, setPage] = useState(1)
useEffect(()=> {
  changePage(Number(page))
}, [page])
  return (
    <>
      <Pagination size="lg">
        <Pagination.First
          onClick={() => {
            setPage((p) => (p -= 1))
          }}
          disabled={page <= 1}
        />
        <Pagination.Item className="h-100">
          <Form.Control
            value={page}
            onChange={({ target: { value } }) => {
              console.log(value);
              setPage(value)
            }}
            type="number"
            placeholder={page}
            min={1}
          />
        </Pagination.Item>

        <Pagination.Last
          onClick={() => {
            setPage((p) => (p += 1))
          }}
        />
      </Pagination>
    </>
  )
}
